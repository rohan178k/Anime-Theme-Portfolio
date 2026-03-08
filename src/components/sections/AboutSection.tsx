"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    const hobbies = [
        "Writing",
        "Poetry (Hindi/English/Marathi/Urdu)",
        "Music (Guitar, Piano/Keyboard)",
        "Gaming",
        "Painting",
        "Public Speaking",
    ];

    return (
        <section id="about" className="relative min-h-[100vh] w-full flex flex-col justify-center items-center px-6 py-24 md:py-0">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto backdrop-blur-md bg-background/30 border border-foreground/10 p-8 md:p-16 rounded-3xl shadow-2xl"
            >
                <h2 className="font-serif text-3xl md:text-5xl border-b border-comet-cyan/30 pb-4 mb-8 inline-block">
                    About Me
                </h2>

                <p className="font-sans text-lg md:text-2xl font-light text-foreground/90 leading-relaxed max-w-2xl mb-12 border-l-2 border-comet-cyan pl-6">
                    A multifaceted individual combining technical precision with creative expression.
                </p>

                <div>
                    <h3 className="font-sans text-sm tracking-widest uppercase text-foreground/60 mb-6">Hobbies & Interests</h3>
                    <div className="flex flex-wrap gap-4">
                        {hobbies.map((hobby, i) => (
                            <motion.span
                                key={hobby}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                className="px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 text-sm md:text-base tracking-wider hover:bg-comet-cyan/20 hover:border-comet-cyan/50 transition-colors cursor-default cursor-none"
                            >
                                {hobby}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
