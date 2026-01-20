import { motion } from "framer-motion";
import {
    CheckCircle2, Target, Brain, BookOpen, FileText,
    Shield, Zap, Calendar, Activity, Lock, ArrowLeft,
    Smartphone, Database, Cloud, LifeBuoy
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingMobileNav from "@/components/LandingMobileNav";

const FeaturesPage = () => {
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

    const featureSections = [
        {
            title: "Daily Mastery",
            description: "Il cuore del sistema. Tracciamento chirurgico delle tue routine.",
            icon: Activity,
            features: [
                { name: "Tri-State Logic", desc: "Non solo fatto/non fatto. Gestisci 'Done', 'Missed' e 'Skipped' (legittimo) per statistiche reali." },
                { name: "Frequency Control", desc: "Imposta abitudini per giorni specifici (es. Lun, Mer, Ven) o quotidiane." },
                { name: "Quantifiable Goals", desc: "Traccia numeri precisi: '2 litri d'acqua', '10 pagine lette', '45 minuti workout'." },
                { name: "Streak Freeze", desc: "La modalità 'Skipped' congela la tua streak senza romperla quando sei malato o in ferie." }
            ]
        },
        {
            title: "Long-Term Vision",
            description: "Perché la disciplina senza direzione è inutile.",
            icon: Target,
            features: [
                { name: "Macro Goals", desc: "Obiettivi Annuali, Trimestrali e Mensili collegati alle tue azioni quotidiane." },
                { name: "Life View", desc: "La visualizzazione 'Memento Mori': tutta la tua vita in mesi, dal 2003 al 2088. Impattante." },
                { name: "Yearly Trends", desc: "Analisi comparative degli anni passati. Scopri qual è stato il tuo anno più produttivo." },
                { name: "Category Balance", desc: "Grafico radar per vedere se stai trascurando aree vitali (Salute, Lavoro, Relazioni)." }
            ]
        },
        {
            title: "Intelligence & AI",
            description: "Il tuo secondo cervello, potenziato dall'AI locale.",
            icon: Brain,
            features: [
                { name: "AI Neural Coach", desc: "Utilizza Local LLM (Ollama) per analizzare i tuoi dati e darti consigli settimanali su misura." },
                { name: "Mood & Energy Matrix", desc: "Traccia Energia e Umore su un piano cartesiano. Scopri quando sei al picco della performance." },
                { name: "Privacy First AI", desc: "L'AI gira sul TUO computer. Nessun dato viene inviato a server esterni o cloud AI." },
                { name: "Correlations", desc: "Il sistema impara: 'Quando dormi male (Mood), salti spesso l'allenamento (Habit)'." }
            ]
        },
        {
            title: "Utilities Suite",
            description: "Tutti gli strumenti che ti servono, in un unico posto.",
            icon: Database,
            features: [
                { name: "Reading Tracker", desc: "Calendario specifico per la lettura. Traccia pagine e consistenza giornaliera." },
                { name: "Markdown Memos", desc: "Editor di testo integrato con supporto Markdown per note veloci e idee." },
                { name: "Smart Deletion", desc: "Archiviazione intelligente (Soft Delete) per non perdere lo storico delle abitudini cancellate." },
                { name: "Full Backup", desc: "Esporta tutti i tuoi dati in JSON con un click. Sei il proprietario delle tue informazioni." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="hidden md:inline text-sm font-medium">Torna alla Home</span>
                    </Link>
                    <span className="font-semibold text-lg tracking-tight">System Capabilities</span>
                    <LandingMobileNav />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 mb-6"
                    >
                        <Zap size={12} />
                        <span>Full Feature List</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        More Than Just <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Checkboxes.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Un vero sistema operativo per la vita. Ogni modulo è progettato per lavorare in sinergia con gli altri.
                    </motion.p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-6xl space-y-24">

                    {featureSections.map((section, idx) => (
                        <div key={idx} className="relative">
                            {/* Section Header */}
                            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 mb-12 pb-6 border-b border-white/10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <section.icon className="text-purple-500" size={28} />
                                        <h2 className="text-3xl font-bold">{section.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 text-lg">{section.description}</p>
                                </div>
                            </div>

                            {/* Cards Grid */}
                            <motion.div
                                variants={container}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {section.features.map((feature, fIdx) => (
                                    <motion.div
                                        key={fIdx}
                                        variants={fadeInUp}
                                        className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-800/50 hover:border-purple-500/20 transition-all duration-300 group"
                                    >
                                        <h3 className="font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors">
                                            {feature.name}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}

                </div>
            </section>

            {/* Technical Note */}
            <section className="py-20 px-6 bg-zinc-900/20 mt-20 border-y border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <Smartphone className="w-12 h-12 text-zinc-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Mobile & Desktop Native</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Tutte queste funzionalità sono accessibili al 100% da qualsiasi dispositivo.
                        L'interfaccia si adatta fluidamente dal monitor 4K del tuo desktop allo schermo del tuo smartphone.
                    </p>
                    <div className="flex justify-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} /> iOS Ready</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Android Ready</span>
                        <span className="flex items-center gap-2"><CheckCircle2 size={16} /> MacOS/Windows</span>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-12 bg-black text-center">
                <div className="container mx-auto px-6">
                    <p className="text-zinc-500 text-sm mb-6">
                        Pronto a prendere il controllo?
                    </p>
                    <a href="https://github.com/simo-hue/mattioli.OS" target="_blank" rel="noreferrer">
                        <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg">
                            Vai su GitHub
                        </Button>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default FeaturesPage;
