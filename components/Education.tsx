'use client';

import { motion } from 'framer-motion';

const education = [
    {
        id: 1,
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'C.K. Pithawala College of Engineering and Technology, Surat',
        period: 'September 2022 – Expected May 2026',
        details: [
            'Affiliation: Gujarat Technological University (GTU).',
            'Academic Performance: Maintaining a high Cumulative CGPA of 8.67/10.0.',
            'Core Curriculum: Bridging the gap between robust software development and cloud-based AI.',
            'Generative AI: Currently completing a structured, day-by-day learning schedule for Generative AI (Feb–March 2026).',
            'Machine Learning: Completed specialized study modules for Deep Learning and Natural Language Processing (NLP).'
        ]
    }
];

export default function Education() {
    return (
        <section id="education" className="bg-transparent px-8 py-24 relative z-20 flex flex-col items-center">

            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center"
                >
                    Education
                </motion.h2>

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/10"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-white mb-2">{edu.institution}</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 font-mono text-sm">
                                    <span className="text-blue-400 font-semibold">{edu.degree}</span>
                                    <span>•</span>
                                    <span>{edu.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {edu.details.map((detail, i) => (
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
