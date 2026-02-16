'use client';

import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 pointer-events-none"
        >
            <div className="pointer-events-auto">
                <span className="text-white font-sans font-medium text-lg tracking-wide mix-blend-difference">
                    Aryan Vaghasiya
                </span>
            </div>

            <div className="pointer-events-auto">
                <a
                    href="/resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Resume
                </a>
            </div>
        </motion.header>
    );
}
