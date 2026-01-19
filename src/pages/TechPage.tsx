import { motion } from "framer-motion";
import {
    Cpu, Smartphone, Globe, Cloud, Code2,
    Database, Zap, Lock, Github, Layers, ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TechPage = () => {
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

    const technologies = [
        { name: "React 18", icon: Code2, desc: "Component-based UI architecture for maximum modularity." },
        { name: "TypeScript", icon: Code2, desc: "Type-safe code ensuring robustness and maintainability." },
        { name: "Vite", icon: Zap, desc: "Next-generation frontend tooling for instant builds." },
        { name: "Supabase", icon: Database, desc: "Open Source Firebase alternative. Postgres engine." },
        { name: "Tailwind CSS", icon: Layers, desc: "Utility-first CSS provided by Shadcn/UI for premium design." },
        { name: "Framer Motion", icon: Zap, desc: "Production-ready animations and gestures." }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Torna alla Home</span>
                    </Link>
                    <span className="font-semibold text-lg tracking-tight">Technical Architecture</span>
                    <div className="w-20"></div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />

                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-6"
                    >
                        <Cpu size={12} />
                        <span>Engineering Excellence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Future-Proof <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Tech Stack.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Costruito per essere veloce, scalabile e gratuito. Nessun abbonamento, nessun vendor lock-in. Solo puro codice Open Source.
                    </motion.p>
                </div>
            </section>

            {/* Main Pillars */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Deployment & Accessibility Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                        {/* Deployment Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                <Cloud size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Zero-Cost Deployment</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                L'intera applicazione è architettata per essere ospitata gratuitamente.
                                Non serve un server dedicato.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <Github size={16} className="text-white" />
                                    <span>Hostato su <strong>GitHub Pages</strong> o Vercel</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <Database size={16} className="text-green-400" />
                                    <span>Backend su <strong>Supabase</strong> (Tier Free Generoso)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <Globe size={16} className="text-blue-400" />
                                    <span>Accessibile ovunque via Browser</span>
                                </li>
                            </ul>
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                <code className="text-xs text-zinc-500 font-mono">
                                    git push origin main<br />
                                    # Deploy automatico attivo
                                </code>
                            </div>
                        </motion.div>

                        {/* Mobile First Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mobile Experience, App-Free</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Non devi scaricare nulla dall'App Store. Mattioli.OS è una <strong>Progressive Web App (PWA)</strong>.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white/5">
                                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                                    <div className="text-xs text-zinc-500">Responsive</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5">
                                    <div className="text-2xl font-bold text-white mb-1">0mb</div>
                                    <div className="text-xs text-zinc-500"> spazio richiesto</div>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-500 border-l-2 border-purple-500 pl-4">
                                "Aggiungi alla Home" su iOS e Android per avere un'esperienza identica a un'app nativa, a schermo intero e senza distrazioni.
                            </p>
                        </motion.div>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <motion.div
                        variants={container}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-800/50 transition-colors group"
                            >
                                <div className="mb-4 text-zinc-400 group-hover:text-white transition-colors">
                                    <tech.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold mb-2">{tech.name}</h4>
                                <p className="text-sm text-zinc-500">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sync Info */}
            <section className="py-24 px-6 bg-zinc-900/20 border-t border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-500/10 text-green-400 mb-6">
                        <Cloud size={24} />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Always Connected</h2>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Inizia sul portatile, continua sul telefono. Grazie a Supabase, i tuoi dati sono istantaneamente sincronizzati su tutti i tuoi dispositivi in tempo reale.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-zinc-400">
                            <Lock size={14} />
                            <span className="text-sm">End-to-End Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-zinc-400">
                            <Zap size={14} />
                            <span className="text-sm">Real-time Sync</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-black text-center">
                <div className="container mx-auto px-6">
                    <p className="text-zinc-500 text-sm">
                        Designed & Engineered by <span className="text-white">Simone Mattioli</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default TechPage;
