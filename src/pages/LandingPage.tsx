import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, BarChart3, Brain, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Mattioli.OS
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-medium border border-white/10 text-white/60">
                            v4.1
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
                        <Link to="/features" className="hover:text-white transition-colors">Funzionalità</Link>
                        <Link to="/philosophy" className="hover:text-white transition-colors">Filosofia</Link>
                        <Link to="/tech" className="hover:text-white transition-colors">Tech</Link>
                        <Link to="/creator" className="hover:text-white transition-colors">Il Founder</Link>
                        <Link to="/faq" className="hover:text-white transition-colors font-medium text-purple-400">FAQ</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/get-started">
                            <Button size="sm" className="rounded-full px-4 bg-white text-black hover:bg-zinc-200 transition-colors">
                                Guida Installazione
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            System Operational
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-300"
                        >
                            <span className="text-[10px]">✨</span>
                            Open Source & Free Forever
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent"
                    >
                        Il Sistema Operativo <br />
                        Per la Tua <span className="text-white">Produttività.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Una suite completa <span className="text-white font-medium">Open Source</span> e <span className="text-white font-medium">totalmente gratuita</span> per tracciare abitudini, definire macro obiettivi e monitorare la tua crescita personale con precisione chirurgica.
                    </motion.p>
                </div>
            </section>

            {/* Core Modules Grid */}
            <section id="features" className="py-24 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* Daily Habits */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Daily Protocol</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Traccia le tue abitudini giornaliere con un sistema tri-state (Done, Missed, Skipped). Analisi visiva della costanza.
                            </p>
                        </motion.div>

                        {/* Macro Goals */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Macro Goals System</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Pianificazione strutturata a livelli: Settimanale, Mensile, Trimestrale e Annuale. Allinea la visione a lungo termine con l'azione quotidiana.
                            </p>
                        </motion.div>

                        {/* AI Coach */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">AI Neural Coach</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Analisi intelligente dei tuoi progressi generata da LLM locali. Report settimanali e suggerimenti di ottimizzazione personalizzati.
                            </p>
                        </motion.div>

                        {/* Analytics */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Deep Analytics</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Visualizza i tuoi dati attraverso grafici avanzati, heatmaps e radar charts per identificare pattern e aree di miglioramento.
                            </p>
                        </motion.div>

                        {/* Calendar */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Life Calendar</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Una visione d'insieme della tua vita in settimane. "Memento Mori" visualization per mantenere alta l'urgenza e il focus.
                            </p>
                        </motion.div>

                        {/* Privacy */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-zinc-500/30 transition-all duration-300 hover:bg-zinc-900/80">
                            <div className="h-12 w-12 rounded-lg bg-zinc-500/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Private & Secure</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                I tuoi dati sono tuoi. Architettura Privacy-first con supporto per Local LLM per mantenere le tue informazioni sensibili al sicuro.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Preview Section */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold mb-16">Designed for Peak Performance</h2>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-black rounded-lg border border-white/10 p-2 md:p-4 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-6">
                                <div className="space-y-2">
                                    <div className="text-sm text-zinc-500 uppercase tracking-wider">Completion Rate</div>
                                    <div className="text-4xl font-mono font-bold text-white">87%</div>
                                    <div className="text-xs text-green-400 flex items-center gap-1">↑ 12% vs last month</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-sm text-zinc-500 uppercase tracking-wider">Active Streak</div>
                                    <div className="text-4xl font-mono font-bold text-white">42 <span className="text-lg text-zinc-600">days</span></div>
                                    <div className="text-xs text-purple-400">Personal Best</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-sm text-zinc-500 uppercase tracking-wider">Focus Time</div>
                                    <div className="text-4xl font-mono font-bold text-white">1,240 <span className="text-lg text-zinc-600">hrs</span></div>
                                    <div className="text-xs text-zinc-500">Year to Date</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 bg-black">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
                    <div className="mb-4 md:mb-0">
                        <span className="font-semibold text-zinc-300">Mattioli.OS</span> © 2026. Open Source Project.
                    </div>
                    <div className="flex gap-6">
                        <Link to="/get-started" className="hover:text-white cursor-pointer transition-colors">Guida Installazione</Link>
                        <Link to="/creator" className="hover:text-white cursor-pointer transition-colors">Il Founder</Link>
                        <Link to="/faq" className="hover:text-white cursor-pointer transition-colors">FAQ & Support</Link>
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">System Status</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
