"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EducationSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const eduItems = [
        {
            degree: "BCA (Current)",
            school: "New Arts, Commerce and Science College, Ahilyanagar",
            score: "1st Year CGPA: 9.36",
        },
        {
            degree: "HSC",
            school: "Maharashtra Public School and Junior College, Ahilyanagar",
            score: "68.67%",
        },
        {
            degree: "SSC",
            school: "Bhausaheb Firodiya Highschool, Ahilyanagar",
            score: "93.60%",
        },
    ];

    return (
        <section id="education" ref={containerRef} className="relative min-h-[100vh] w-full flex justify-center items-center px-6 py-24 md:py-0 overflow-hidden">

            {/* Parallax Background Glow */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
                className="absolute w-[400px] h-[400px] bg-comet-magenta/10 rounded-full blur-[100px] top-1/4 -right-20 pointer-events-none"
            />

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl text-center mb-20 tracking-wide"
                >
                    Academic Journey
                </motion.h2>

                <div className="flex flex-col gap-12 border-l border-comet-cyan/30 ml-4 md:ml-12 pl-8 md:pl-16 relative">
                    {eduItems.map((item, i) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline dot */}
                            <div className="absolute top-2 -left-[41px] md:-left-[73px] w-4 h-4 rounded-full bg-background border-2 border-comet-cyan shadow-[0_0_10px_#C2F3FE]" />

                            <div className="bg-foreground/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-foreground/10 transition-colors">
                                <h3 className="font-serif text-2xl text-comet-cyan">{item.degree}</h3>
                                <p className="font-sans text-lg mt-2 text-foreground/80">{item.school}</p>
                                <div className="inline-block mt-4 px-4 py-1 rounded-full text-sm tracking-widest font-bold bg-comet-magenta/20 text-comet-magenta border border-comet-magenta/30">
                                    {item.score}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
