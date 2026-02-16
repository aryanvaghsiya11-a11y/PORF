'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="bg-transparent px-8 py-12 relative z-20 flex items-center">
            <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Let's work <br />
                        <span className="text-blue-500">together.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        I'm currently looking for new opportunities as an AI Engineer or Data Analyst.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div>
                            <span className="block text-sm text-gray-500 font-mono mb-1 uppercase tracking-wider">Email</span>
                            <a href="mailto:aryanvaghasiya11@gmail.com" className="text-xl text-white hover:text-blue-400 transition-colors">
                                aryanvaghasiya11@gmail.com
                            </a>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-mono mb-1 uppercase tracking-wider">GitHub</span>
                            <a href="https://github.com/aryanvaghsiya11-a11y" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-blue-400 transition-colors">
                                github.com/aryanvaghsiya11-a11y
                            </a>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500 font-mono mb-1 uppercase tracking-wider">LinkedIn</span>
                            <a href="https://linkedin.com/in/aryan-vaghasiya-68a3b01b6" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-blue-400 transition-colors">
                                linkedin.com/in/aryan-vaghasiya
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group rounded-3xl p-[1px] overflow-hidden"
                >
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#0a0a0a_25%,#3b82f6_50%,#0a0a0a_75%,#ef4444_100%)] animate-[spin_4s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-[1px] rounded-3xl bg-[#0a0a0a] z-0" />

                    <div className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl h-full">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm text-gray-400 mb-2 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                                    placeholder="+91 00000 00000"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light resize-none"
                                    placeholder="What's on your mind?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
