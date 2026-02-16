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
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
            <nav className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative px-5 py-2.5 rounded-full text-sm text-gray-300 hover:text-white transition-colors group"
                    >
                        <span className="relative z-10">{link.name}</span>
                        <span className="absolute inset-0 bg-white/10 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
