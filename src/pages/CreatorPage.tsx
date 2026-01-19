import { motion } from "framer-motion";
import {
    Terminal, Mountain, Globe, Github, Linkedin,
    ArrowLeft, Cpu, Heart, Trees
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingMobileNav from "@/components/LandingMobileNav";

const CreatorPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-900 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Torna alla Home</span>
                    </Link>
                    <span className="font-semibold text-lg tracking-tight hidden md:block">The Founder</span>
                    <div className="w-20 hidden md:block"></div>
                    <LandingMobileNav />
                </div>
            </nav>

            {/* Hero Section - Split Soul */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 blur-[120px] -z-10" />
                <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-900/10 blur-[120px] -z-10" />

                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-6">
                            Simone <span className="text-zinc-500">Mattioli</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light">
                            Dal codice alla cima. Un viaggio tra byte e natura selvaggia.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

                        {/* Tech Soul */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/30 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                                <Terminal size={24} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Tech & AI <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">Developer</span>
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Laureando in Informatica all'Università di Verona, appassionato di AI.
                                Sono di base una persona molto curiosa, ma soprattutto DISCIPLINATA che vuole raggiungere degli obiettivi grandi.
                                <br /><br />
                                Mattioli.OS nasce da qui: dalla necessità di struttura in un mondo caotico.
                            </p>
                        </motion.div>

                        {/* Nature Soul */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-zinc-900/30 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                                <Mountain size={24} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Mountain <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Explorer</span>
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Quando chiudo l'IDE, apro la mappa della Val di Rabbi. Inseguo cervi col binocolo e scalo vette al tramonto.
                                <br /><br />
                                Ho imparato più sulla resilienza gestendo imprevisti in montagna che fixando bug. La natura è il mio vero reset.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-6 bg-zinc-900/20 border-y border-white/5">
                <div className="container mx-auto max-w-3xl text-center">
                    <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-6">"Vision without action is just a dream."</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Ho fatto volontariato nelle favelas del Brasile, un'esperienza che mi ha insegnato l'importanza dell'empatia e del "restituire".
                        Credo nell'Open Source come forma di condivisione di conoscenza.
                        <br /><br />
                        Che sia scrivere un algoritmo o tracciare un sentiero, cerco sempre di creare qualcosa che abbia un impatto reale, anche piccolo.
                    </p>
                </div>
            </section>

            {/* Connect */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold mb-12">Connect with me</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://github.com/simo-hue" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white hover:text-black gap-2 transition-all">
                                <Github size={20} />
                                GitHub
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/simonemattioli2003/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white gap-2 transition-all">
                                <Linkedin size={20} />
                                LinkedIn
                            </Button>
                        </a>
                        <a href="https://mountainfaunalover.github.io/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white gap-2 transition-all">
                                <Trees size={20} />
                                Mountain Project
                            </Button>
                        </a>
                        <a href="http://simo-hue.github.io" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-purple-600 hover:border-purple-600 hover:text-white gap-2 transition-all w-full md:w-auto">
                                <Globe size={20} />
                                Personal Site
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreatorPage;
