import { motion } from "framer-motion";
import {
    Lightbulb, ArrowLeft, Target,
    Puzzle, TrendingUp, Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingMobileNav from "@/components/LandingMobileNav";

const PhilosophyPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const container = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-amber-900 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="hidden md:inline text-sm font-medium">Torna alla Home</span>
                    </Link>
                    <span className="font-semibold text-lg tracking-tight">Our Philosophy</span>
                    <LandingMobileNav />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-amber-900/10 blur-[120px] rounded-full -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300 mb-6"
                    >
                        <Lightbulb size={12} />
                        <span>Origin Story</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Built Out of <br />
                        <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                            Necessity.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed space-y-6 text-left"
                    >
                        <p>
                            Per anni ho cercato un software che fosse completo, gratuito e capace di gestire la mia produttività come volevo io.
                            Ho iniziato utilizzando i <strong>Promemoria di Apple</strong>, immediati ma limitati.
                            Poi mi sono evoluto, studiando e costruendo interi sistemi complessi su <strong>Notion</strong>.
                        </p>
                        <p>
                            Ma mancava sempre qualcosa. Nessuno strumento aveva quella fluidità unita alla visione d'insieme che cercavo.
                            Nulla che assomigliasse a questo tool, che è veramente una cosa unica nel suo genere.
                        </p>
                        <p className="font-semibold text-white">
                            Non l'ho trovato. E allora l'ho creato io.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 px-6 bg-zinc-900/20 border-y border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">I Tre Pilastri</h2>
                        <p className="text-zinc-400">La metodologia su cui si fonda Mattioli.OS</p>
                    </div>

                    <motion.div
                        variants={container}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Pillar 1 */}
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                                <Puzzle size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Micro & Macro Alignment</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Le abitudini giornaliere (Micro) non hanno senso senza una visione (Macro).
                                Il sistema collega ogni piccola azione quotidiana ai tuoi obiettivi annuali e trimestrali.
                            </p>
                        </motion.div>

                        {/* Pillar 2 */}
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Data-Driven Growth</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                "Non puoi migliorare ciò che non misuri."
                                Oltre al semplice "fatto/non fatto", analizziamo le correlazioni tra i tuoi goal e il tuo mood per capire cosa funziona davvero.
                            </p>
                        </motion.div>

                        {/* Pillar 3 */}
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Extreme Ownership</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Nessun dato venduto. Nessun algoritmo nascosto.
                                Il software è open source perché la tua produttività e i tuoi dati sensibili devono appartenere solo a te.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 px-6 relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <Target className="w-16 h-16 text-amber-500/20 mx-auto mb-8" />
                    <blockquote className="text-3xl md:text-4xl font-serif italic text-zinc-300 mb-8 leading-relaxed">
                        "La vera libertà non è l'assenza di impegni, ma la capacità di scegliere le proprie catene. Io ho scelto la disciplina."
                    </blockquote>
                    <cite className="text-amber-500 not-italic font-medium">— Manifesto Mattioli.OS</cite>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-zinc-900/20 text-center">
                <div className="container mx-auto px-6">
                    <p className="text-zinc-500 text-sm mb-6">
                        Vuoi vedere il codice che muove tutto questo?
                    </p>
                    <Link to="/tech">
                        <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-zinc-300">
                            Esplora la Tecnologia
                        </Button>
                    </Link>
                    <a href="https://github.com/simo-hue/mattioli.OS" target="_blank" rel="noreferrer">
                        <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-4 text-lg">
                            Vai su GitHub
                        </Button>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default PhilosophyPage;
