import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, Search, ArrowLeft, Shield, Brain,
    Database, Activity, Target, Smartphone, Code2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// FAQ Data
const faqData = [
    {
        category: "Philosophy & General",
        icon: Activity,
        questions: [
            { q: "Cos'è Mattioli.OS?", a: "È un sistema operativo completo per la crescita personale. Non è solo un habit tracker, ma una suite integrata per gestire abitudini giornaliere, obiettivi a lungo termine e analisi delle performance." },
            { q: "Perché 'OS' (Operating System)?", a: "Perché mira a sostituire l'infrastruttura frammentata che usiamo di solito (note sparse, app multiple, fogli excel) con un unico sistema centralizzato e coerente per gestire la propria vita." },
            { q: "È veramente gratuito?", a: "Sì, al 100%. È un progetto Open Source rilasciato sotto licenza MIT. I tuoi dati sono tuoi, non c'è nessun abbonamento premium." },
            { q: "In cosa differisce da Notion o Todoist?", a: "Mattioli.OS è 'opinionated'. Notion è flessibile ma richiede ore per il setup. Todoist è focalizzato sulle liste. Questo sistema è costruito specificamente per la disciplina e l'analisi quantitativa dei dati, pronto all'uso." },
            { q: "Qual è la filosofia di base?", a: "Si basa su 'Atomic Habits' di James Clear: 'Non ci innalziamo al livello dei nostri obiettivi, scendiamo al livello dei nostri sistemi'. Il focus è sulla riduzione dell'attrito e sulla visualizzazione dei progressi." },
            { q: "Devo creare un account?", a: "Sì, il sistema utilizza Supabase Auth per garantire che i tuoi dati siano sicuri, criptati e accessibili solo a te. L'account è gratuito." },
            { q: "Chi è lo sviluppatore?", a: "Sono Simone Mattioli, uno sviluppatore appassionato di produttività e data visualization. Ho costruito questo tool inizialmente per me stesso." },
        ]
    },
    {
        category: "Daily Protocol",
        icon: Activity,
        questions: [
            { q: "Cos'è il 'Daily Protocol'?", a: "È la tua lista di abitudini giornaliere non negoziabili. Il cuore del sistema per costruire la consistenza." },
            { q: "Come funziona la logica 'Tri-State'?", a: "Ogni abitudine può avere 3 stati: 'Done' (fatto, verde), 'Missed' (mancato, rosso), 'Skipped' (saltato legittimamente, grigio). Questo offre più sfumature rispetto al semplice sì/no." },
            { q: "Qual è la differenza tra Missed e Skipped?", a: "'Missed' penalizza la tua streak e le statistiche (hai fallito). 'Skipped' è neutro (es. eri malato o in vacanza), non rompe la streak ma non contribuisce al punteggio." },
            { q: "Come elimino un'abitudine?", a: "Se l'abitudine ha dei dati storici, viene 'archiviata' (Soft Delete) per non perdere le statistiche passate. Se non ha dati, viene eliminata definitivamente." },
            { q: "Posso personalizzare i colori?", a: "Assolutamente. Ogni abitudine può avere un colore specifico per aiutarti a raggrupparle visivamente (es. Salute = Verde, Lavoro = Blu)." },
            { q: "Cos'è una 'Streak'?", a: "È il numero di giorni consecutivi in cui hai completato un'abitudine senza 'Missed'. Gli 'Skipped' mantengono la streak congelata." },
            { q: "Posso impostare abitudini solo per certi giorni?", a: "Sì, puoi definire la frequenza (es. Lun, Mer, Ven). Negli altri giorni l'abitudine non apparirà nella tua lista daily." },
            { q: "Posso tracciare valori numerici?", a: "Sì, puoi abilitare il tracciamento quantitativo (es. '2 litri d'acqua', '10 pagine lette') oltre allo stato completato." },
        ]
    },
    {
        category: "Macro Goals & Vision",
        icon: Target,
        questions: [
            { q: "Cosa sono i Macro Goals?", a: "Sono obiettivi a lungo termine strutturati gerarchicamente: Annuali, Trimestrali, Mensili e Settimanali." },
            { q: "Come visualizzo i miei progressi a lungo termine?", a: "C'è una dashboard dedicata ('Mappa') con grafici radar, trend di completamento e analisi delle categorie per vedere se stai bilanciando bene la tua vita." },
            { q: "Cos'è il calendario 'Memento Mori'?", a: "Una visualizzazione della tua vita in settimane (dalla nascita presunta alla morte statistica). Serve a creare urgenza e dare valore al tempo." },
            { q: "Posso vedere lo storico degli anni passati?", a: "Sì, la dashboard 'All-Time' ti permette di navigare tra i dati di tutti gli anni in cui hai usato il sistema, con KPI aggregati." },
            { q: "C'è un limite al numero di obiettivi?", a: "Tecnicamente no. Il sistema gestisce paginazione efficiente anche per migliaia di record, ma per la tua sanità mentale consigliamo di focalizzarti su poche priorità." },
        ]
    },
    {
        category: "AI Coach & Privacy",
        icon: Brain,
        questions: [
            { q: "Come funziona l'AI Coach?", a: "Analizza i tuoi dati (abitudini, mood, obiettivi) e genera report settimanali con consigli personalizzati. Funziona come un mental coach virtuale." },
            { q: "I miei dati vengono inviati a OpenAI/Google?", a: "NO. Di default il sistema è progettato per usare 'Local LLM' (Ollama). I dati vengono processati localmente sul tuo machine. Privacy first." },
            { q: "Cosa significa 'Local LLM'?", a: "Significa che il modello di intelligenza artificiale (es. Llama 3, Mistral) gira sul tuo computer, non su un server remoto. Nessun dato lascia la tua rete." },
            { q: "Come configuro Ollama?", a: "Devi scaricare Ollama dal sito ufficiale, installare un modello (es. `ollama run llama3`) e assicurarti che il server sia attivo sulla porta 11434." },
            { q: "Posso usare il sistema senza AI?", a: "Certamente. L'AI Coach è un modulo opzionale. Se non lo configuri o lo disabiliti nelle impostazioni, il resto dell'app funziona perfettamente." },
            { q: "L'AI legge le mie note personali?", a: "Solo se glielo permetti esplicitamente per generare correlazioni tra il tuo stato d'animo e le tue performance." },
        ]
    },
    {
        category: "Tech & Data",
        icon: Database,
        questions: [
            { q: "Dove sono salvati i dati?", a: "Su Supabase, un database PostgreSQL open source e sicuro. Tu sei l'unico proprietario dei tuoi dati tramite autenticazione." },
            { q: "Posso fare un backup?", a: "Sì. C'è una funzione 'Complete Backup' che scarica un archivio ZIP contenente tutti i tuoi dati in formato JSON, organizzati per tabelle." },
            { q: "Posso importare/esportare i dati?", a: "Sì, il sistema di backup supporta sia l'export che l'import completo, utile per migrare o mettere al sicuro le informazioni." },
            { q: "Esiste un'app mobile?", a: "Mattioli.OS è una PWA (Progressive Web App). Puoi installarla sulla home del tuo telefono (iOS/Android) e funziona quasi come un'app nativa." },
            { q: "Qual è lo stack tecnologico?", a: "React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Supabase, TanStack Query, Recharts." },
            { q: "Posso self-hostare il database?", a: "Sì, essendo Supabase open source, puoi hostare la tua istanza Docker se hai le competenze tecniche per farlo." },
        ]
    },
    {
        category: "Troubleshooting & Support",
        icon: Code2,
        questions: [
            { q: "Ho trovato un bug, cosa faccio?", a: "Apri una issue su GitHub. Il progetto è attivamente mantenuto e i contributi della community sono benvenuti." },
            { q: "Perché l'AI non risponde?", a: "Verifica che Ollama sia in esecuzione (`ollama serve`) e che il modello selezionato sia scaricato. Controlla anche che il browser non blocchi le chiamate a localhost (CORS)." },
            { q: "Il sito sembra lento con molti dati?", a: "Abbiamo implementato la paginazione ricorsiva e il virtual scrolling. Se noti rallentamenti sopra i 100k record, faccelo sapere." },
            { q: "Come aggiorno alla nuova versione?", a: "Se usi la versione web, aggiorna semplicemente la pagina. Se hai clonato la repo, fai `git pull` e `npm run build`." },
        ]
    }
];

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredFAQs = faqData.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.questions.length > 0 && (activeCategory === "All" || cat.category === activeCategory));

    const toggleAccordion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-900 selection:text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Torna alla Home</span>
                    </Link>
                    <span className="font-semibold text-lg tracking-tight">Q&A Knowledge Base</span>
                    <div className="w-20"></div> {/* Spacer for centering */}
                </div>
            </nav>

            {/* Hero & Search */}
            <section className="pt-32 pb-12 px-6 bg-zinc-900/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                        Domande Frequenti
                    </h1>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Tutto quello che devi sapere su Mattioli.OS. Dalla filosofia di base ai dettagli tecnici più profondi.
                    </p>

                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-zinc-500" />
                        <Input
                            type="text"
                            placeholder="Cerca una domanda..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-white/5 border-white/10 rounded-full focus:ring-purple-500/50 text-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-4xl">

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        <Button
                            variant={activeCategory === "All" ? "secondary" : "ghost"}
                            onClick={() => setActiveCategory("All")}
                            className="rounded-full"
                        >
                            Tutte
                        </Button>
                        {faqData.map((cat, i) => (
                            <Button
                                key={i}
                                variant={activeCategory === cat.category ? "secondary" : "ghost"}
                                onClick={() => setActiveCategory(cat.category)}
                                className="rounded-full border border-white/5"
                            >
                                {cat.category}
                            </Button>
                        ))}
                    </div>

                    {/* Questions List */}
                    <div className="space-y-12">
                        {filteredFAQs.map((category, catIndex) => (
                            <div key={catIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                                    <category.icon className="text-purple-400" size={24} />
                                    <h2 className="text-2xl font-semibold">{category.category}</h2>
                                </div>

                                <div className="space-y-4">
                                    {category.questions.map((item, qIndex) => {
                                        const id = `${catIndex}-${qIndex}`;
                                        const isOpen = openIndex === id;

                                        return (
                                            <div
                                                key={qIndex}
                                                className={`rounded-xl border transition-all duration-200 ${isOpen ? "bg-white/5 border-purple-500/30" : "bg-transparent border-white/5 hover:bg-white/5"}`}
                                            >
                                                <button
                                                    onClick={() => toggleAccordion(id)}
                                                    className="w-full flex items-center justify-between p-5 text-left"
                                                >
                                                    <span className={`font-medium text-lg ${isOpen ? "text-purple-300" : "text-zinc-200"}`}>
                                                        {item.q}
                                                    </span>
                                                    <ChevronDown
                                                        className={`transform transition-transform duration-200 text-zinc-500 ${isOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="p-5 pt-0 text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                                                                {item.a}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {filteredFAQs.length === 0 && (
                            <div className="text-center py-20 text-zinc-500">
                                <p>Nessuna domanda trovata per "{searchQuery}"</p>
                                <Button variant="link" onClick={() => setSearchQuery("")} className="text-purple-400">Cancella ricerca</Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer Call to Action */}
            <section className="py-20 border-t border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4">Hai altre domande?</h3>
                <p className="text-zinc-400 mb-8">
                    Unisciti alla community o contattaci direttamente su GitHub.
                </p>
                <a href="https://github.com/simo-hue/habit-tracker" target="_blank" rel="noreferrer">
                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg">
                        Vai su GitHub
                    </Button>
                </a>
            </section>
        </div>
    );
};

export default FAQPage;
