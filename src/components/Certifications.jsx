import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: 'Issued 2026',
            description:
                'Learned fundamental concepts of computer programming, problem-solving techniques, Python syntax, data types, loops, functions, and object-oriented programming basics using Python.',
            link: '/certificates/Python_Essentials_1_certificate_karan-udani140632-marwadiuniversity-ac-in_ebc55008-da72-478b-a545-010057f08975.pdf'
        },
        {
        title: 'Networking Essentials',
        issuer: 'Cisco Networking Academy',
        date: 'Issued 2026',
        description:
            'Learned networking fundamentals, network devices, IP addressing, wireless communication, network security basics, and how modern computer networks keep the digital world connected.',
        link: '/certificates/networking-essentials.pdf'
    },
    {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'AWS & Forage',
    date: 'Issued Dec 2024',
    description: 'Completed a practical job simulation focused on designing scalable and secure cloud hosting architectures using AWS services, gaining hands-on experience in cloud computing and solution architecture concepts.',
    link: '/certificates/aws-solutions-architecture-job-simulation.pdf'
},
{
    title: 'Introduction to API and RESTful API',
    issuer: 'Great Learning Academy',
    date: 'Issued July 2024',
    description:
        'Learned the fundamentals of APIs and RESTful services, including HTTP methods, request-response architecture, endpoints, JSON data handling, and API integration concepts.',
    link: '/certificates/introduction-to-api.pdf'
}
    ];

    return (
        <section
            id="certifications"
            className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
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

                {/* Certification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="card p-8 group relative overflow-hidden"
                            style={{
                                gridColumn: certs.length === 1 ? '1 / -1' : 'auto',
                                maxWidth: certs.length === 1 ? '600px' : '100%',
                                margin: certs.length === 1 ? '0 auto' : '0'
                            }}
                        >
                            {/* Background Icon */}
                            <div className="absolute -right-10 -top-10 text-slate-50 dark:text-slate-800/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Award size={180} />
                            </div>

                            <div className="relative z-10">

                                {/* Top Icon */}
                                <div className="w-14 h-14 bg-softBlue-100 dark:bg-softBlue-900/40 rounded-xl flex items-center justify-center mb-6 text-softBlue-600 dark:text-softBlue-400">
                                    <Award size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-softBlue-600 dark:group-hover:text-softBlue-400 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Issuer & Date */}
                                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                                    <span className="text-slate-600 dark:text-slate-300">
                                        {cert.issuer}
                                    </span>

                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>

                                    <span className="text-slate-500 dark:text-slate-400">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* PDF Button */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-softBlue-600 dark:text-softBlue-400 font-medium hover:text-softBlue-700 dark:hover:text-softBlue-300 transition-colors group/link"
                                >
                                    View PDF

                                    <ExternalLink
                                        size={16}
                                        className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                                    />
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
