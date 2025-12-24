import { useMemo } from 'react';
import { Goal, GoalLogsMap } from '@/types/goals';
import { format, subDays, subWeeks, subMonths, subYears, eachDayOfInterval, differenceInCalendarDays, isBefore, isAfter, startOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
import { it } from 'date-fns/locale';

export interface HabitStat {
    id: string;
    title: string;
    color: string;
    currentStreak: number;
    longestStreak: number;
    totalDays: number;
    completionRate: number;
}

export interface DayActivity {
    date: string;
    count: number;
    intensity: number; // 0-4 scale for heatmap
}

export interface TrendData {
    date: string;
    [habitId: string]: number | string; // percentage
}

export interface ComparisonStat {
    previous: number;
    current: number;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}

export interface HabitComparison {
    habitId: string;
    week: ComparisonStat;
    month: ComparisonStat;
    year: ComparisonStat;
}

export interface CriticalHabitStat {
    habitId: string;
    title: string;
    color: string;
    completionRate: number;
    worstDay: string; // e.g., "Monday"
    worstDayRate: number; // Completion rate on that specific day
}

export function useHabitStats(goals: Goal[], logs: GoalLogsMap) {
    return useMemo(() => {
        const today = startOfDay(new Date());
        // Flatten logs to get all active dates for global calculations
        const allLogDates = Object.keys(logs).sort();

        // 1. Calculate Individual Goal Stats
        const habitStats: HabitStat[] = goals.map(goal => {
            const startDate = startOfDay(new Date(goal.start_date));
            const goalId = goal.id;

            let currentStreak = 0;
            let longestStreak = 0;
            let tempStreak = 0;
            let totalDone = 0;

            // Calculate validity period (days since start_date until today)
            // If start_date is in future, totalValidDays is 0
            const daysSinceStart = Math.max(0, differenceInCalendarDays(today, startDate) + 1);

            // Iterate through all logs to catch "done" status
            // Note: This relies on logs. If a user didn't log anything for a day, it's missing from `logs`.
            // But for streaks/rate, we need to know consecutive days.

            // Streaks Calculation
            // We iterate strictly from today backwards for current streak
            const checkDate = new Date(today);
            let isStreakActive = true;

            // Check today first
            const todayKey = format(checkDate, 'yyyy-MM-dd');
            const todayStatus = logs[todayKey]?.[goalId];

            if (todayStatus === 'done') {
                currentStreak++;
            } else if (todayStatus === 'missed') {
                isStreakActive = false;
            }
            // If neither done nor missed (null), we assume streak is potentially alive if yesterday was done?
            // "Skipped" maintains streak? Let's say yes for now or ignore. 
            // Usually: 
            // Done -> +1
            // Missed -> Break
            // Null -> Break (if strict) OR Continue (if lenient). 
            // Mattioli.OS should be strict: you must execute.
            else {
                // If today is NOT done, streak is officially 0 unless we are lenient.
                // But usually currentStreak counts CONSECUTIVE days ending today or yesterday.
                // If I haven't done it TODAY yet, but I did it YESTERDAY, my streak is usually kept "pending".
                // So if today is null, we don't break yet, we check yesterday.
            }

            // Loop backwards from yesterday
            let daysBack = 1;
            while (true) {
                const pastDate = subDays(today, daysBack);
                if (isBefore(pastDate, startDate)) break; // Don't go before start date

                const key = format(pastDate, 'yyyy-MM-dd');
                const status = logs[key]?.[goalId];

                if (status === 'done') {
                    if (isStreakActive) currentStreak++;
                } else if (status === 'missed') {
                    // Missed: Break streak
                    if (daysBack === 1 && todayStatus !== 'missed' && todayStatus !== 'done') {
                        isStreakActive = false;
                    } else {
                        isStreakActive = false;
                    }
                } else {
                    // Skipped or Null (Empty) -> Treat as Rest Day.
                    // Do NOT break streak. Do NOT increment streak.
                    // Just continue searching backwards.

                    // Note: If we are at day 1 (yesterday) and it's empty, 
                    // and today is empty, isStreakActive remains true (pending),
                    // so we keep looking back for the last 'done'.
                }

                if (!isStreakActive) break;

                // Safety break to prevent infinite loops if start_date is weird or huge data
                if (daysBack > 365 * 5) break;

                daysBack++;
            }

            // Simplified loop for Longest Streak & Total Done
            // Iterate all days from start_date to today
            if (daysSinceStart > 0) {
                for (let i = 0; i < daysSinceStart; i++) {
                    const date = subDays(today, i);
                    const key = format(date, 'yyyy-MM-dd');
                    const status = logs[key]?.[goalId];

                    if (status === 'done') {
                        totalDone++;
                        tempStreak++;
                    } else if (status === 'missed') {
                        // Only reset on missed
                        longestStreak = Math.max(longestStreak, tempStreak);
                        tempStreak = 0;
                    } else {
                        // Empty or Skipped -> Continue without resetting, but don't increment
                        // This effectively "bridges" the gap.
                        // Example: Done (1), Empty, Done (1) -> Streak should be 2.
                        // Wait, if I want Done, Empty, Done to be Streak 2...
                        // Then tempStreak should NOT reset. Correct.
                        // And it doesn't increment. Correct.
                        // So next time 'done' hits, tempStreak goes 1 -> 2. Correct.
                    }
                }
                longestStreak = Math.max(longestStreak, tempStreak);
            }

            // Completion Rate (All time or last 30 days?)
            // Legacy was "Last 30 days". Let's match that but respect start_date.
            let rateDays = 0;
            let rateDone = 0;
            const last30 = subDays(today, 29);

            // Interval: max(last30, start_date) to today
            const rateStart = isAfter(startDate, last30) ? startDate : last30;

            if (!isAfter(rateStart, today)) {
                eachDayOfInterval({ start: rateStart, end: today }).forEach(day => {
                    rateDays++;
                    const key = format(day, 'yyyy-MM-dd');
                    if (logs[key]?.[goalId] === 'done') rateDone++;
                });
            }

            const completionRate = rateDays > 0 ? Math.round((rateDone / rateDays) * 100) : 0;

            return {
                id: goal.id,
                title: goal.title,
                color: goal.color,
                currentStreak, // Simplified for now, might need more robust logic
                longestStreak,
                totalDays: totalDone,
                completionRate
            };
        });

        // 2. Heatmap Data (Activity intensity)
        const heatmapData: DayActivity[] = [];
        const oneYearAgo = subDays(today, 365);

        eachDayOfInterval({ start: oneYearAgo, end: today }).forEach(day => {
            const key = format(day, 'yyyy-MM-dd');
            // Count how many goals were active AND done this day
            let possibleGoals = 0;
            let doneGoals = 0;

            goals.forEach(g => {
                // Was the goal active this day?
                const gStart = new Date(g.start_date);
                if (isBefore(startOfDay(day), startOfDay(gStart))) return; // Too early
                // if (g.end_date && isAfter(day, g.end_date)) return; // Too late (future feature)

                possibleGoals++;
                if (logs[key]?.[g.id] === 'done') doneGoals++;
            });

            let intensity = 0;
            if (possibleGoals > 0 && doneGoals > 0) {
                const pct = doneGoals / possibleGoals;
                if (pct <= 0.25) intensity = 1;
                else if (pct <= 0.50) intensity = 2;
                else if (pct <= 0.75) intensity = 3;
                else intensity = 4;
            }

            heatmapData.push({
                date: key,
                count: doneGoals,
                intensity
            });
        });

        // 3. Trend Data (Last 7 days)
        const trendData: TrendData[] = [];
        const last7Days = subDays(today, 6);

        eachDayOfInterval({ start: last7Days, end: today }).forEach(day => {
            const key = format(day, 'yyyy-MM-dd');
            const dataPoint: TrendData = { date: format(day, 'EEE', { locale: it }) };

            let dailyDone = 0;
            let dailyActive = 0;

            goals.forEach(goal => {
                const gStart = new Date(goal.start_date);
                if (isBefore(startOfDay(day), startOfDay(gStart))) {
                    dataPoint[goal.id] = 0; // Or null?
                    return;
                }

                dailyActive++;
                const status = logs[key]?.[goal.id];
                const isDone = status === 'done';
                if (isDone) dailyDone++;

                dataPoint[goal.id] = isDone ? 100 : 0;
            });

            const overall = dailyActive > 0 ? Math.round((dailyDone / dailyActive) * 100) : 0;
            dataPoint['overall'] = overall;
            trendData.push(dataPoint);
        });

        // 4. Weekday Stats (Day of Week Analysis)
        const weekdayStats = [0, 0, 0, 0, 0, 0, 0].map((_, i) => ({
            dayIndex: i, // 0 = Sunday, 1 = Monday ... 6 = Saturday (date-fns standard)
            dayName: format(new Date(2024, 0, 7 + i), 'EEEE', { locale: it }), // Dummy date to get name. 7th Jan 2024 was Sunday
            totalActive: 0,
            totalDone: 0,
            rate: 0
        }));

        // Re-iterate logs to populate weekday stats
        // We need effective denominator: how many times was a goal EXPECTED on a Monday?

        // Strategy: Iterate last 90 days (approx 3 months) to give relevant "recent" stats, not all time.
        // Or all time? Let's do All Time for robustness if not too heavy.

        // Optimization: We already have goals and logs.
        // We can just iterate the `allLogDates`? 
        // No, `allLogDates` only has dates where something happened. We need denominator (misses too).

        // Let's iterate `eachDayOfInterval` from earliest start_date to today.
        const earliestStart = goals.reduce((min, g) => isBefore(new Date(g.start_date), min) ? new Date(g.start_date) : min, today);

        // Limit to last 365 days max for performance if needed, but JS handles thousands easily.
        const analysisStart = isAfter(earliestStart, subDays(today, 365)) ? earliestStart : subDays(today, 365);

        if (!isAfter(analysisStart, today)) {
            eachDayOfInterval({ start: analysisStart, end: today }).forEach(day => {
                const dayIndex = day.getDay(); // 0-6
                const key = format(day, 'yyyy-MM-dd');

                goals.forEach(goal => {
                    // Check range
                    const gStart = new Date(goal.start_date);
                    if (isBefore(day, gStart)) return;

                    // Future: check frequency_days here if we implement specific days (e.g. Mon/Wed only)
                    // If goal.frequency_days exists and doesn't include dayIndex (1-7 adjustment?), skip.

                    weekdayStats[dayIndex].totalActive++;

                    if (logs[key]?.[goal.id] === 'done') {
                        weekdayStats[dayIndex].totalDone++;
                    }
                });
            });
        }

        weekdayStats.forEach(stat => {
            stat.rate = stat.totalActive > 0 ? Math.round((stat.totalDone / stat.totalActive) * 100) : 0;
        });

        // Global Stats
        const totalActiveDays = allLogDates.length; // Approximate
        const globalSuccessRate = habitStats.length > 0
            ? Math.round(habitStats.reduce((acc, curr) => acc + curr.completionRate, 0) / habitStats.length)
            : 0;

        // 6. Calculate Critical Stats
        // We need detailed weekday stats per habit to find the worst day
        // We can reuse the loop logic or create a helper. 
        // Let's create a dedicated helper for critical stats to keep main body clean.
        const criticalHabits = calculateCriticalStats(goals, logs, today);

        // 5. Calculate Comparisons
        // Week
        const currentWeekStart = startOfWeek(today, { locale: it, weekStartsOn: 1 });
        const currentWeekEnd = today;
        const prevWeekStart = subWeeks(currentWeekStart, 1);
        const prevWeekEnd = subDays(currentWeekStart, 1);

        // Month
        const currentMonthStart = startOfMonth(today);
        const currentMonthEnd = today;
        const prevMonthStart = subMonths(currentMonthStart, 1);
        const prevMonthEnd = subDays(currentMonthStart, 1);

        // Year
        const currentYearStart = startOfYear(today);
        const currentYearEnd = today;
        const prevYearStart = subYears(currentYearStart, 1);
        const prevYearEnd = subDays(currentYearStart, 1);

        const weekStats = calculatePeriodStats(goals, logs, currentWeekStart, currentWeekEnd, prevWeekStart, prevWeekEnd, 'week');
        const monthStats = calculatePeriodStats(goals, logs, currentMonthStart, currentMonthEnd, prevMonthStart, prevMonthEnd, 'month');
        const yearStats = calculatePeriodStats(goals, logs, currentYearStart, currentYearEnd, prevYearStart, prevYearEnd, 'year');

        const comparisons: HabitComparison[] = goals.map(g => ({
            habitId: g.id,
            week: weekStats[g.id],
            month: monthStats[g.id],
            year: yearStats[g.id]
        }));

        const statsResult = {
            habitStats,
            heatmapData,
            trendData,
            weekdayStats: weekdayStats.sort((a, b) => {
                // Sort to start Monday (1) -> Sunday (0)
                // Monday is 1, Sunday is 0.
                // We want 1, 2, 3, 4, 5, 6, 0
                if (a.dayIndex === 0) return 1;
                if (b.dayIndex === 0) return -1;
                return a.dayIndex - b.dayIndex;
            }),
            totalActiveDays, // This might need better definition
            globalSuccessRate,
            bestStreak: Math.max(...habitStats.map(h => h.longestStreak), 0),
            worstDay: weekdayStats.reduce((min, curr) => curr.rate < min.rate && curr.totalActive > 0 ? curr : min, weekdayStats[0]).dayName,
            comparisons: comparisons,
            criticalHabits: criticalHabits.sort((a, b) => a.completionRate - b.completionRate) // Sort by lowest rate first
        };

        // Inject into return object
        // We can't easily inject cleanly without changing return type or using the object created above
        return statsResult;

    }, [goals, logs]);
}



function calculatePeriodStats(
    goals: Goal[],
    logs: GoalLogsMap,
    startCurrent: Date,
    endCurrent: Date,
    startPrev: Date,
    endPrev: Date,
    type: 'week' | 'month' | 'year' = 'month'
): { [habitId: string]: ComparisonStat } {
    const result: { [habitId: string]: ComparisonStat } = {};
    const habitIds = goals.map(g => g.id);

    // Helper to calculate rate for a period
    const calculateRate = (habitId: string, start: Date, end: Date, goalStart: Date) => {
        // Effective start for this period: max(periodStart, goalStart)
        const effectiveStart = isBefore(start, goalStart) ? goalStart : start;

        // If effective start is after end, the goal wasn't active yet -> return 0 (or null?)
        if (isAfter(effectiveStart, end)) return 0;

        let totalDays = 0;
        let doneDays = 0;

        // Optimization: iterate only effective range
        eachDayOfInterval({ start: effectiveStart, end }).forEach(day => {
            totalDays++;
            const key = format(day, 'yyyy-MM-dd');
            if (logs[key]?.[habitId] === 'done') doneDays++;
        });

        return totalDays > 0 ? Math.round((doneDays / totalDays) * 100) : 0;
    };

    habitIds.forEach(id => {
        const goal = goals.find(g => g.id === id);
        if (!goal) return;
        const gStart = new Date(goal.start_date);

        const currentRate = calculateRate(id, startCurrent, endCurrent, gStart);
        const prevRate = calculateRate(id, startPrev, endPrev, gStart);
        const change = currentRate - prevRate;

        let trend: 'up' | 'down' | 'neutral' = 'neutral';
        if (change > 0) trend = 'up';
        if (change < 0) trend = 'down';

        result[id] = {
            previous: prevRate,
            current: currentRate,
            change,
            trend
        };
    });

    return result;
}

function calculateCriticalStats(goals: Goal[], logs: GoalLogsMap, today: Date): CriticalHabitStat[] {
    const criticalStats: CriticalHabitStat[] = [];

    // Analyze over past X days (e.g. 90 days) for meaningful data
    const analysisStart = subDays(today, 90);

    goals.forEach(goal => {
        // Init weekday counters
        const weekdayCounts = [0, 0, 0, 0, 0, 0, 0].map(() => ({ total: 0, done: 0 }));

        let overallDone = 0;
        let overallTotal = 0;

        const effectiveStart = isBefore(analysisStart, new Date(goal.start_date)) ? new Date(goal.start_date) : analysisStart;

        if (!isAfter(effectiveStart, today)) {
            eachDayOfInterval({ start: effectiveStart, end: today }).forEach(day => {
                const dayIndex = day.getDay();
                const key = format(day, 'yyyy-MM-dd');

                weekdayCounts[dayIndex].total++;
                if (logs[key]?.[goal.id] === 'done') {
                    weekdayCounts[dayIndex].done++;
                    overallDone++;
                }
                overallTotal++;
            });
        }

        // Calculate rate per day
        let worstDay = '';
        let worstDayRate = 101;

        weekdayCounts.forEach((stat, index) => {
            if (stat.total < 4) return; // Ignore days with too few occurrences (less than 4 weeks of data for that day)

            const rate = Math.round((stat.done / stat.total) * 100);
            if (rate < worstDayRate) {
                worstDayRate = rate;
                // Get day name
                const date = new Date(2024, 0, 7 + index); // Sunday 7th Jan 2024
                worstDay = format(date, 'EEEE', { locale: it });
            }
        });

        // Use 'Overall' rate or 100 if no data
        const completionRate = overallTotal > 0 ? Math.round((overallDone / overallTotal) * 100) : 0;

        if (worstDayRate === 101) {
            worstDay = 'N/A'; // No sufficient data
            worstDayRate = completionRate; // Default to average
        }

        criticalStats.push({
            habitId: goal.id,
            title: goal.title,
            color: goal.color,
            completionRate,
            worstDay,
            worstDayRate
        });
    });

    return criticalStats;
}
