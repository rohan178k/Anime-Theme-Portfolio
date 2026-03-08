"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

function OrbitalSakura() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nucleusRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        type Petal = {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            life: number;
            maxLife: number;
            angle: number;
            spin: number;
            tilt: number;
            tiltSpin: number;
            wavyPhase: number;
            wavyFreq: number;
            wavyAmp: number;
        };

        const petals: Petal[] = [];
        const baseColors = ["#FFC0CB", "#C67A86", "#FFFFFF"];
        const lightModeColors = ["#FFC0CB", "#C67A86", "#FFFFFF", "#E84B8A", "#E84B8A"];

        let lastEmitTime = Date.now();

        const render = () => {
            ctx.clearRect(0, 0, 400, 400);

            const time = Date.now();
            const colors = resolvedTheme === "light" ? lightModeColors : baseColors;

            // Constant rhythmic 30s orbit
            const currentAngle = (time % 30000) / 30000 * Math.PI * 2;
            const radius = 155;
            const cx = 200;
            const cy = 200;

            const nX = cx + Math.cos(currentAngle) * radius;
            const nY = cy + Math.sin(currentAngle) * radius;

            if (time - lastEmitTime > 30) {
                lastEmitTime = time;
                const emitCount = 1 + Math.floor(Math.random() * 2);

                for (let i = 0; i < emitCount; i++) {
                    const driftAngle = currentAngle + (Math.random() - 0.5) * 1.5;
                    const speed = Math.random() * 0.4 + 0.1;

                    petals.push({
                        x: nX + (Math.random() - 0.5) * 8,
                        y: nY + (Math.random() - 0.5) * 8,
                        vx: Math.cos(driftAngle) * speed,
                        vy: Math.sin(driftAngle) * speed,
                        size: Math.random() * 4 + 3,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        life: 0,
                        maxLife: Math.floor(Math.random() * 30 + 90),
                        angle: Math.random() * Math.PI * 2,
                        spin: (Math.random() - 0.5) * 0.1,
                        tilt: Math.random() * Math.PI,
                        tiltSpin: (Math.random() - 0.5) * 0.1,
                        wavyPhase: Math.random() * Math.PI * 2,
                        wavyFreq: Math.random() * 0.05 + 0.02,
                        wavyAmp: Math.random() * 0.5 + 0.2
                    });
                }
            }

            if (nucleusRef.current) {
                nucleusRef.current.style.transform = `translate(${nX}px, ${nY}px) translate(-50%, -50%)`;
            }

            for (let i = petals.length - 1; i >= 0; i--) {
                const p = petals[i];
                p.life++;

                if (p.life >= p.maxLife) {
                    petals.splice(i, 1);
                    continue;
                }

                p.x += p.vx;
                p.y += p.vy;
                p.angle += p.spin;
                p.tilt += p.tiltSpin;

                const waveOffset = Math.sin(p.life * p.wavyFreq + p.wavyPhase) * p.wavyAmp;

                ctx.save();
                ctx.translate(p.x + waveOffset, p.y + waveOffset);
                ctx.rotate(p.angle);
                ctx.scale(1, Math.max(0.1, Math.abs(Math.cos(p.tilt))));

                ctx.beginPath();
                ctx.moveTo(0, -p.size / 2);
                ctx.bezierCurveTo(p.size, -p.size / 2, p.size, p.size / 2, 0, p.size / 2);
                ctx.bezierCurveTo(-p.size, p.size / 2, -p.size, -p.size / 2, 0, -p.size / 2);

                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, 1 - (p.life / p.maxLife));
                ctx.fill();
                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [resolvedTheme]);

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-20">
            <canvas ref={canvasRef} width={400} height={400} className="w-full h-full" />
            <div
                ref={nucleusRef}
                className="absolute top-0 left-0 w-[10px] h-[10px] bg-white rounded-full"
                style={{ filter: "blur(1px)", boxShadow: "0 0 30px 10px #C2F3FE", willChange: "transform" }}
            />
        </div>
    );
}

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen h-auto w-full flex flex-col justify-center items-center overflow-hidden pt-16 md:pt-20 pb-6">
            <div className="relative group perspective-1000 mb-4 md:mb-8 mt-6 md:mt-12">
                <div className="relative w-72 h-72 rounded-full p-2">
                    <Image
                        src="/resources/profile-pic.png"
                        alt="Rohan Kusmude"
                        fill
                        className="object-cover rounded-full z-10 p-4 drop-shadow-[0_0_20px_rgba(194,243,254,0.3)] filter brightness-110"
                        priority
                    />
                    <OrbitalSakura />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center mt-4 md:mt-12 z-30"
            >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-comet-cyan to-white drop-shadow-lg p-2">
                    ROHAN KUSMUDE
                </h1>
                <p className="font-sans text-sm md:text-lg tracking-[0.3em] font-light text-foreground/80 mt-4 uppercase max-w-2xl mx-auto px-4 leading-relaxed">
                    2nd Year BCA Student <span className="text-comet-cyan mx-2">|</span> AI Prompt Engineer <span className="text-comet-cyan mx-2">|</span> Full-Stack Aspirant
                </p>
            </motion.div>

            {/* Scroll indicator */}
            {/* <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 opacity-50 flex flex-col items-center gap-2 z-30"
            >
                <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-8 bg-comet-cyan/50" />
            </motion.div> */}
        </section>
    );
}
