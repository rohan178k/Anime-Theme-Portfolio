"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    color: string;
};

const projects: Project[] = [
    {
        title: "Python Projects",
        description: "I have created several projects using Python, including a Hangman game, a PyMongo connectivity suite, Snake Game, etc.",
        tech: ["Python", "Terminal UI", "Logic", "PyMongo", "Pygame"],
        link: "https://github.com/rohan178k/Python-Projects/",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Web Development Projects",
        description: "I have created several projects using Web Development, including a Tic-Tac-Toe game, Simon Says game, a basic to-do app, etc.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/rohan178k/Web-Projects/",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Anime-Themed Portfolio",
        description: "A high-performance web showcase utilizing React, advanced GSAP/ScrollTrigger animations, and custom WebGL shaders for a cinematic user experience.",
        tech: ["React", "GSAP", "TailwindCSS", "WebGL", "NextJS"],
        link: "https://github.com/rohan178k/Anime-Theme-Portfolio",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Data Analysis Dashboard",
        description: "Complex data visualization and logic modeling structured natively within Excel. Features pivot tables, dynamic charting, and macro-driven insights.",
        tech: ["Excel", "Data Viz", "VBA", "Analytics"],
        link: "https://github.com/rohan178k/Data-Analysis-Dashboard/",
        color: "from-amber-500/20 to-orange-500/20"
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-12 z-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl"
            >
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-comet-cyan to-white">
                        PROJECTS
                    </h2>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-comet-cyan/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 hover:bg-black/60 transition-all duration-500 cursor-pointer flex flex-col h-full"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            {/* Header */}
                            <div className="flex justify-between items-start mb-6 z-10">
                                <h3 className="font-serif text-2xl font-bold tracking-wide text-white group-hover:text-comet-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-comet-cyan/20 transition-colors">
                                    <ExternalLink size={20} className="text-white/50 group-hover:text-comet-cyan transition-colors" />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed mb-auto z-10">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-8 z-10">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-sans tracking-wider uppercase rounded-full border border-comet-cyan/30 bg-comet-cyan/5 text-comet-cyan/90">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
