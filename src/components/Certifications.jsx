import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Building Games Using Java and JavaScript',
            issuer: 'Online Learning Platform',
            date: 'Issued Dec 2023',
            description: 'Comprehensive course covering game loops, physics basics, object-oriented concepts, and rendering on HTML5 Canvas. Built multiple functional lightweight games.',
            link: '#'
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Certifications
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="card p-8 group relative overflow-hidden md:col-start-1"
                            // Used col-start for centering if taking only 1 item for now
                            style={{
                                gridColumn: certs.length === 1 ? '1 / -1' : 'auto',
                                maxWidth: certs.length === 1 ? '600px' : '100%',
                                margin: certs.length === 1 ? '0 auto' : '0'
                            }}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-10 -top-10 text-slate-50 dark:text-slate-800/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Award size={180} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-softBlue-100 dark:bg-softBlue-900/40 rounded-xl flex items-center justify-center mb-6 text-softBlue-600 dark:text-softBlue-400">
                                    <Award size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-softBlue-600 dark:group-hover:text-softBlue-400 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                                    <span className="text-slate-600 dark:text-slate-300">{cert.issuer}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                    <span className="text-slate-500 dark:text-slate-400">{cert.date}</span>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.link}
                                    className="inline-flex items-center gap-2 text-softBlue-600 dark:text-softBlue-400 font-medium hover:text-softBlue-700 dark:hover:text-softBlue-300 transition-colors group/link"
                                >
                                    View Credential
                                    <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
