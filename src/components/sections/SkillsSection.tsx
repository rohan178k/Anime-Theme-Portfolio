"use client";

import { motion } from "framer-motion";

interface SkillCategory {
    title: string;
    skills?: string[];
    advanced?: string[];
    basic?: string[];
}

export function SkillsSection() {
    const categories: SkillCategory[] = [
        {
            title: "Programming",
            skills: ["C", "C++", "Python", "Java", "JavaScript"],
        },
        {
            title: "Web",
            skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Node.js", "Express.js", "Next.js"],
        },
        {
            title: "DBMS",
            skills: ["MongoDB (including PyMongo)", "MySQL", "PostgreSQL"],
        },
        {
            title: "Tools & AI",
            skills: ["Canva", "MS Excel", "CLI", "GitHub", "Google Gemini", "Expert AI Prompting"],
        },
    ];

    return (
        <section id="skills" className="relative min-h-[100vh] w-full flex flex-col justify-center items-center px-6 py-24 md:py-0">
            <div className="max-w-6xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-5xl border-l-[3px] border-comet-magenta pl-6 mb-16"
                >
                    Arsenal / Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-foreground/5 backdrop-blur-md p-8 rounded-3xl border border-foreground/10 hover:border-comet-cyan/50 transition-colors group"
                        >
                            <h3 className="font-serif text-2xl mb-6 text-comet-cyan group-hover:text-comet-magenta transition-colors">{cat.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills && cat.skills.map((skill) => (
                                    <span key={skill} className="px-4 py-2 font-sans text-sm rounded-full bg-background/50 border border-foreground/5 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                                {cat.advanced && (
                                    <div className="w-full flex flex-col gap-3 mt-2">
                                        <div className="text-xs uppercase tracking-widest text-foreground/50">Advanced</div>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.advanced.map(skill => (
                                                <span key={skill} className="px-4 py-2 font-sans text-sm rounded-full bg-comet-cyan/10 border border-comet-cyan/20">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {cat.basic && (
                                    <div className="w-full flex flex-col gap-3 mt-4">
                                        <div className="text-xs uppercase tracking-widest text-foreground/50">Basic</div>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.basic.map(skill => (
                                                <span key={skill} className="px-4 py-2 font-sans text-sm rounded-full bg-background/50 border border-foreground/5">{skill}</span>
                                            ))}
                                        </div>
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
