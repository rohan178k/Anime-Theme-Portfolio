"use client";

import { motion } from "framer-motion";

export function CertificationsSection() {
    const certifications = [
        {
            title: "Google Cloud Cybersecurity Virtual Internship",
            issuer: "Eduskill",
            date: "2025",
        },
        {
            title: "Sigma 4.0 (Complete Web Development + DSA)",
            issuer: "Apna College",
            date: "2026",
        },
        {
            title: "Maharashtra State Certificate in Information Technology (MS-CIT)",
            issuer: "MKCL",
            date: "2022",
        },
        {
            title: "Foundation course in Content Writing, Editing and Translation (English)",
            issuer: "Dept of English, New Arts College",
            date: "2025",
        },
    ];

    return (
        <section id="certifications" className="relative min-h-[100vh] w-full flex flex-col justify-center items-center px-6 py-24 md:py-0">
            <div className="max-w-5xl mx-auto w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl border-b border-comet-cyan/30 inline-block pb-4 mb-16"
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-background/40 backdrop-blur-md p-10 rounded-2xl border border-foreground/10 hover:border-comet-magenta/50 transition-all flex flex-col justify-between items-center text-center shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-comet-cyan/5 to-comet-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="font-serif text-xl md:text-2xl mb-4 relative z-10">{cert.title}</h3>
                            <div className="flex flex-col items-center gap-2 relative z-10 leading-relaxed">
                                <span className="font-sans tracking-widest text-comet-cyan uppercase text-sm font-bold">{cert.issuer}</span>
                                <span className="text-foreground/50 text-xs tracking-widest">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
