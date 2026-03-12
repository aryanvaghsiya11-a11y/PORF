'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        id: 7,
        title: 'Tri-Modal Health Screening',
        category: 'AI & Healthcare Diagnostics',
        description: 'A multi-modal AI system (DenseNet121, XGBoost, Stacked Bi-LSTM) designed to predict lung Infiltration by fusing visual, tabular, and sequential data.',
        github: 'https://github.com/aryanvaghsiya11-a11y/tri-modal-health-screening',
        deploy: 'https://huggingface.co/spaces/aryan6970/tri-modal-health-screening',
    },
    {
        id: 6,
        title: 'Medical Chat Bot',
        category: 'AI & NLP',
        description: 'An intelligent medical chatbot powered by LLMs, deployed on Hugging Face Spaces. Provides conversational health guidance using natural language processing.',
        github: 'https://github.com/aryanvaghsiya11-a11y/Medical-Chat-Bot',
        deploy: 'https://huggingface.co/spaces/aryan6970/Medical_chatbot',
    },
    {
        id: 5,
        title: 'Human Face Emotion Recognition',
        category: 'Deep Learning & Computer Vision',
        description: 'Deep Learning pipeline identifying 7 types of human emotions using Transfer Learning. Features automated data acquisition from Kaggle, data visualization, and model training.',
    },
    {
        id: 1,
        title: 'Customer Churn Prediction',
        category: 'AI & Deep Learning',
        description: 'Artificial Neural Network (ANN) designed to predict banking customer turnover. Optimized with feature scaling and backpropagation for high accuracy.',
    },
    {
        id: 2,
        title: 'Global EV Analytics',
        category: 'Data Analytics',
        description: 'Interactive Power BI dashboard tracking realtime electric vehicle performance, battery consumption, and mileage worldwide.',
    },
    {
        id: 3,
        title: 'Restaurant Mgmt System',
        category: 'Mobile App (Flutter)',
        description: 'Cross-platform app for table bookings and order tracking. Features real-time Firebase syncing for seamless staff coordination.',
    },
    {
        id: 4,
        title: 'Heart Disease Prediction',
        category: 'Machine Learning',
        description: 'Classification model using Logistic Regression and Random Forest to predict health risks based on clinical parameters.',
    }
];

export default function Projects() {
    return (
        <section id="projects" className="bg-transparent px-4 sm:px-6 md:px-8 py-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-16 tracking-tight"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl p-[1px] overflow-hidden cursor-pointer"
                        >
                            {/* Animated Gradient Border */}
                            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#0a0a0a_25%,#3b82f6_50%,#0a0a0a_75%,#ef4444_100%)] animate-[spin_4s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-[1px] rounded-2xl bg-[#0a0a0a] z-0" />

                            <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full bg-white/5 backdrop-blur-sm rounded-2xl transition-colors duration-500 group-hover:bg-transparent flex flex-col">
                                <span className="text-[10px] sm:text-xs font-mono text-blue-400 mb-2 block tracking-wider uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Links row */}
                                {(project.github || project.deploy) && (
                                    <div className="flex items-center justify-end gap-3 mt-auto pt-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-1.5"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                                Code
                                            </a>
                                        )}
                                        {project.deploy && (
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs font-mono px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all flex items-center gap-1.5 border border-blue-500/20"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
