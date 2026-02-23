'use client';

import { motion } from 'framer-motion';

const links = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Dock() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-[95vw]"
        >
            <nav className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-x-auto no-scrollbar">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative px-2.5 sm:px-3.5 md:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm text-gray-300 hover:text-white active:text-white transition-colors group whitespace-nowrap flex-shrink-0"
                    >
                        <span className="relative z-10">{link.name}</span>
                        <span className="absolute inset-0 bg-white/10 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300" />
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
