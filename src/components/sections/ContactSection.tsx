"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, PhoneCall } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="relative min-h-[100vh] w-full flex flex-col justify-center items-center px-6 py-24 md:py-0">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Side: Info & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-wide">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-comet-cyan to-comet-magenta">Connect</span>
                    </h2>
                    <p className="font-sans text-lg tracking-widest text-foreground/70 mb-12 max-w-md leading-relaxed">
                        Open for collaborations, creative projects, or a chat about the intersection of AI and Web Development.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        <a href="tel:+910000000000" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 hover:border-comet-cyan hover:bg-comet-cyan/10 transition-all">
                            <PhoneCall size={18} className="group-hover:text-comet-cyan" />
                            <span className="font-sans text-sm tracking-widest uppercase">Call Me</span>
                        </a>
                        <a href="mailto:178rohank@gmail.com" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 hover:border-comet-magenta hover:bg-comet-magenta/10 transition-all">
                            <Mail size={18} className="group-hover:text-comet-magenta" />
                            <span className="font-sans text-sm tracking-widest uppercase">Email Me</span>
                        </a>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/rohankusmude/", label: "LinkedIn" },
                            { icon: <Github size={24} />, href: "https://github.com/rohan178k", label: "GitHub" },
                            { icon: <Instagram size={24} />, href: "https://www.instagram.com/rohan_k178/", label: "Instagram" },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/80 hover:text-white transition-colors"
                                title={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-background/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-foreground/10 shadow-2xl relative overflow-hidden"
                >
                    <form action="mailto:178rohank@gmail.com" method="POST" className="flex flex-col gap-6 relative z-10">
                        <div>
                            <label className="block font-sans text-xs tracking-widest text-foreground/50 uppercase mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-foreground/5 border-b border-foreground/20 px-4 py-3 rounded-t-lg outline-none focus:border-comet-cyan transition-colors text-foreground"
                                placeholder="(Kimi no Na wa) "
                            />
                        </div>
                        <div>
                            <label className="block font-sans text-xs tracking-widest text-foreground/50 uppercase mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-foreground/5 border-b border-foreground/20 px-4 py-3 rounded-t-lg outline-none focus:border-comet-cyan transition-colors text-foreground"
                                placeholder="@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="block font-sans text-xs tracking-widest text-foreground/50 uppercase mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-foreground/5 border-b border-foreground/20 px-4 py-3 rounded-t-lg outline-none focus:border-comet-cyan transition-colors text-foreground resize-none"
                                placeholder="Let's build something cinematic..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 px-8 py-4 bg-foreground text-background font-sans font-bold tracking-widest uppercase rounded-xl hover:bg-comet-cyan transition-colors outline-none"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Decorative background flair */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-comet-cyan/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                </motion.div>

            </div>
        </section>
    );
}
