import { motion } from 'framer-motion';
import { Terminal, Database, Sparkles, Layout } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Layout className="text-softBlue-500" size={28} />,
            title: 'Frontend Development',
            description: 'Building responsive, accessible, and highly interactive user interfaces using modern React.'
        },
        {
            icon: <Terminal className="text-softBlue-500" size={28} />,
            title: 'Backend Engineering',
            description: 'Creating robust server-side architectures, RESTful APIs, and efficient database designs.'
        },
        {
            icon: <Sparkles className="text-softBlue-500" size={28} />,
            title: 'AI Integration',
            description: 'Leveraging LLMs and AI tools (LangChain, Llama3) to build intelligent context-aware applications.'
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
                    >
                        I am a dedicated software developer with a strong foundation in full stack web development
                        and a keen interest in artificial intelligence. I focus on writing clean, scalable code
                        and crafting intuitive user experiences.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

                    {/* Text Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                            My Journey
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            My development journey started with a curiosity about how the web works, which quickly
                            evolved into a passion for building complex applications from scratch. I've gained experience
                            working across the entire stack, from designing pixel-perfect interfaces to managing database
                            architectures.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Recently, my focus has expanded into the realm of AI integrations. I'm actively exploring
                            how tools like LangChain, Groq API, and LLMs can be utilized to automate processes, enhance
                            medical assistance software, and build smarter financial tools. I am continuously learning
                            and adapting to new technologies.
                        </p>
                    </motion.div>

                    {/* Cards Right */}
                    <div className="grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="card p-6 flex items-start gap-4 hover:-translate-y-2"
                            >
                                <div className="p-3 bg-softBlue-50 dark:bg-softBlue-900/30 rounded-xl">
                                    {card.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{card.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{card.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
