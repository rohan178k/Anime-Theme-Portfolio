"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Volume2, VolumeX, Menu, X } from "lucide-react";

export function Navbar({
    isMuted,
    toggleMute,
}: {
    isMuted: boolean;
    toggleMute: () => void;
}) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    if (!mounted) return null;

    return (
        <>
            {/* PC Navbar */}
            <nav className="fixed top-0 left-0 w-full z-40 hidden md:flex justify-between items-center px-12 py-6 bg-gradient-to-b from-background to-transparent backdrop-blur-sm">
                <div className="font-serif text-2xl font-bold tracking-widest text-foreground">
                    RK
                </div>
                <div className="flex gap-8 items-center bg-foreground/5 px-6 py-3 rounded-full border border-foreground/10 backdrop-blur-md">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="font-sans text-sm tracking-widest uppercase hover:text-comet-cyan transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="fixed top-0 left-0 w-full z-40 md:hidden flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md">
                <div className="font-serif text-xl font-bold tracking-widest text-foreground">
                    RK
                </div>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors z-50 relative"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    pointerEvents: mobileMenuOpen ? "auto" : "none",
                }}
                className="fixed inset-0 z-30 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
            >
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="font-serif text-3xl tracking-widest hover:text-comet-cyan transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </motion.div>
        </>
    );
}
