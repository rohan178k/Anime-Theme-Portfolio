"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

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
    wavyPhase: number;
    wavyFreq: number;
    wavyAmp: number;
    tilt: number;
    tiltSpin: number;
};

export function CometCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nucleusRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        document.body.style.cursor = "none";

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);

        const mouse = { x: -100, y: -100 };
        const lastMouse = { x: -100, y: -100 };
        const smoothedMouse = { x: -100, y: -100 };

        const handleMouseMove = (e: MouseEvent) => {
            if (mouse.x === -100) {
                lastMouse.x = e.clientX;
                lastMouse.y = e.clientY;
                smoothedMouse.x = e.clientX;
                smoothedMouse.y = e.clientY;
            }
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let isHovering = false;
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && target.closest('a, button, [role="button"], input, select, textarea')) {
                isHovering = true;
            } else {
                isHovering = false;
            }
        };
        window.addEventListener("mouseover", handleMouseOver);

        const petals: Petal[] = [];
        const baseColors = ["#FFC0CB", "#C67A86", "#FFFFFF"];
        const lightModeColors = ["#FFC0CB", "#C67A86", "#FFFFFF", "#E84B8A", "#E84B8A"];

        let animationFrameId: number;
        let currentScale = 1.0;
        let targetScale = 1.0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            if (mouse.x !== -100) {
                const colors = resolvedTheme === "light" ? lightModeColors : baseColors;

                // Liquid damping for the path (smoothed mouse)
                smoothedMouse.x += (mouse.x - smoothedMouse.x) * 0.15;
                smoothedMouse.y += (mouse.y - smoothedMouse.y) * 0.15;

                const dx = mouse.x - lastMouse.x;
                const dy = mouse.y - lastMouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Dynamic emission based on speed: skip generating if stationary
                if (dist > 1.0) {
                    const emitCount = Math.min(Math.floor(dist / 4), 6) + (Math.random() > 0.5 ? 1 : 0);

                    for (let i = 0; i < emitCount; i++) {
                        const angleVariance = (Math.random() - 0.5) * Math.PI;
                        const baseAngle = Math.atan2(dy, dx) + Math.PI + angleVariance;
                        const speed = Math.random() * 1.5 + 0.5;

                        petals.push({
                            x: smoothedMouse.x + (Math.random() - 0.5) * 10,
                            y: smoothedMouse.y + (Math.random() - 0.5) * 10,
                            vx: Math.cos(baseAngle) * speed + (Math.random() - 0.5) * 0.5,
                            vy: Math.sin(baseAngle) * speed + (Math.random() - 0.5) * 0.5,
                            size: Math.random() * 4 + 3,
                            color: colors[Math.floor(Math.random() * colors.length)],
                            life: 0,
                            maxLife: Math.floor(Math.random() * 30 + 90), // 1.5 to 2s
                            angle: Math.random() * Math.PI * 2,
                            spin: (Math.random() - 0.5) * 0.1,
                            wavyPhase: Math.random() * Math.PI * 2,
                            wavyFreq: Math.random() * 0.05 + 0.02,
                            wavyAmp: Math.random() * 1.5 + 0.5,
                            tilt: Math.random() * Math.PI,
                            tiltSpin: (Math.random() - 0.5) * 0.1
                        });
                    }
                }

                lastMouse.x = mouse.x;
                lastMouse.y = mouse.y;

                targetScale = isHovering ? 2.5 : 1.0;
                currentScale += (targetScale - currentScale) * 0.15;

                if (nucleusRef.current) {
                    nucleusRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%) scale(${currentScale})`;
                    nucleusRef.current.style.opacity = "1";
                }
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
                const drawX = p.x + waveOffset;
                const drawY = p.y + waveOffset;

                ctx.save();
                ctx.translate(drawX, drawY);
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

        return () => {
            document.body.style.cursor = "auto";
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>
            <canvas ref={canvasRef} className="w-full h-full" />
            <div
                ref={nucleusRef}
                className="absolute top-0 left-0 w-[10px] h-[10px] bg-white rounded-full opacity-0"
                style={{
                    boxShadow: "0 0 25px 8px #C2F3FE",
                    willChange: "transform"
                }}
            />
        </div>
    );
}
