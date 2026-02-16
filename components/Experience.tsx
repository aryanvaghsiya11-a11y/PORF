'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Microsoft Corporation',
        role: 'Data & AI Intern',
        period: 'July 2025',
        type: 'Virtual',
        details: [
            'AI Solutions: Leveraged Azure AI Fundamentals to build scalable AI solutions and data-driven applications.',
            'Natural Language Processing (NLP): Developed an NLP solution using Azure AI Language services (AI-3003).',
            'Generative AI: Explored and implemented Generative AI models within Azure Machine Learning for automated text generation.',
            'Data Analytics: Conducted advanced data analysis using Power BI, transforming raw data into actionable insights aligned with PL-300 standards.',
            'Program Participation: Engaged in the Microsoft Data & AI Skills Internship Program 2025.'
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="bg-transparent px-8 pb-12 pt-0 relative z-20 flex flex-col items-center">

            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/10"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 font-mono text-sm">
                                    <span className="text-blue-400 font-semibold">{exp.role}</span>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                    <span>•</span>
                                    <span>{exp.type}</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.details.map((detail, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 + (i * 0.05) }}
                                        className="text-gray-300 leading-relaxed flex items-start gap-3"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                        <span>{detail}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
