'use client';

import { motion } from 'framer-motion';

const projects = [
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
        <section id="projects" className="bg-transparent px-8 py-12 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-xs font-mono text-blue-400 mb-2 block tracking-wider uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer / Contact Section */}
            </div>
        </section>
    );
}
