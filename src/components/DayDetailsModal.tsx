import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Goal, GoalLogsMap } from '@/types/goals';
import { cn } from '@/lib/utils';

interface DayDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    date: Date | null;
    habits: Goal[];
    records: GoalLogsMap;
    onToggleHabit: (habitId: string) => void;
    isPrivacyMode?: boolean;
    readonly?: boolean;
}

export function DayDetailsModal({
    date,
    isOpen,
    onClose,
    habits,
    records,
    onToggleHabit,
    isPrivacyMode = false,
    readonly = false
}: DayDetailsModalProps) {
    if (!date) return null;

    const dateKey = format(date, 'yyyy-MM-dd');
    const validHabits = habits.filter(h => {
        const isStarted = h.start_date <= dateKey;
        const isNotEnded = !h.end_date || h.end_date >= dateKey;
        return isStarted && isNotEnded;
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <div className="flex items-center justify-between pr-8">
                        <DialogTitle className="text-xl font-display capitalize">
                            {format(date, 'EEEE d MMMM', { locale: it })}
                        </DialogTitle>
                        {readonly ? (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                                Solo visualizzazione
                            </span>
                        ) : (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                Modifica abilitata
                            </span>
                        )}
                    </div>
                    <DialogDescription className="sr-only">
                        Dettagli delle attività giornaliere
                    </DialogDescription>
                </DialogHeader>

                <div className="py-2">
                    <div className="max-h-[60vh] overflow-y-auto">
                        <div className="space-y-3 pr-4">
                            {validHabits.map((habit) => {
                                const dayRecord = records[dateKey] || {};
                                const status = dayRecord[habit.id];
                                const isDone = status === 'done';
                                const isMissed = status === 'missed';

                                return (
                                    <div
                                        key={habit.id}
                                        onClick={() => !readonly && onToggleHabit(habit.id)}
                                        className={cn(
                                            "flex items-center justify-between p-3 rounded-xl border transition-all",
                                            !readonly && "cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
                                            readonly && "opacity-90",
                                            isDone && "bg-success/15 border-success/30",
                                            isMissed && "bg-destructive/15 border-destructive/30",
                                            !status && "bg-card border-border",
                                            !status && !readonly && "hover:bg-accent"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="h-3 w-3 rounded-full ring-2 ring-offset-2 ring-offset-background"
                                                style={{ backgroundColor: habit.color }}
                                            />
                                            <span className={cn(
                                                "font-medium transition-colors transition-all duration-300",
                                                (isDone || isMissed) && "text-foreground",
                                                isPrivacyMode && "blur-sm"
                                            )}>
                                                {habit.title}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {isDone && <Check className="h-5 w-5 text-success" />}
                                            {isMissed && <X className="h-5 w-5 text-destructive" />}
                                            {!status && (
                                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
