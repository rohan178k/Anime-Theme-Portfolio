"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Gateway({ onBgmStart, onComplete }: { onBgmStart: () => void, onComplete: () => void }) {
    const [phase, setPhase] = useState<"ready" | "intro" | "home-start">("ready");
    const [isVertical, setIsVertical] = useState(false);
    const introVideoRef = useRef<HTMLVideoElement>(null);
    const homeStartVideoRef = useRef<HTMLVideoElement>(null);

    // Check orientation for appropriate video
    useEffect(() => {
        const handleResize = () => setIsVertical(window.innerHeight > window.innerWidth);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleEnter = () => {
        setPhase("intro");
    };

    useEffect(() => {
        if (phase === "intro" && introVideoRef.current) {
            introVideoRef.current.play().catch((err) => console.log("Intro Video autoplay failed:", err));
        } else if (phase === "home-start" && homeStartVideoRef.current) {
            homeStartVideoRef.current.play().catch((err) => console.log("Home Start Video autoplay failed:", err));
        }
    }, [phase]);

    const handleIntroEnd = () => {
        setPhase("home-start");
        onBgmStart();
    };

    const handleHomeStartEnd = () => {
        onComplete();
    };

    return (
        <motion.div
            key="gateway"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${phase === "ready" ? "text-white" : ""}`}
            onClick={phase === "ready" ? handleEnter : undefined}
        >
            {phase === "ready" && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center cursor-pointer select-none"
                >
                    <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl mb-6 tracking-wider">
                        Are You Ready to DIVE IN?
                    </h1>
                    <motion.p
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="font-sans text-sm md:text-lg tracking-widest text-comet-cyan"
                    >
                        [ Click to Enter ]
                    </motion.p>
                </motion.div>
            )}

            {phase === "intro" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                >
                    <video
                        ref={introVideoRef}
                        src={`/resources/intro-videos/${isVertical ? "vertical" : "horizontal"}-intro.mov`}
                        className="w-full h-full object-cover"
                        onEnded={handleIntroEnd}
                        playsInline
                    />
                    <button
                        onClick={handleIntroEnd}
                        className="absolute bottom-8 right-8 text-white/50 hover:text-white font-sans text-sm tracking-widest transition-colors z-10"
                    >
                        SKIP
                    </button>
                </motion.div>
            )}

            {phase === "home-start" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
                >
                    <video
                        ref={homeStartVideoRef}
                        src={`/resources/home-${isVertical ? "vertical" : "horizontal"}/home-start-${isVertical ? "vertical" : "horizontal"}.mov`}
                        className="w-full h-full object-cover"
                        onEnded={handleHomeStartEnd}
                        playsInline
                        muted // Mute this video since bgm will play
                    />
                    <button
                        onClick={handleHomeStartEnd}
                        className="absolute bottom-8 right-8 text-white/50 hover:text-white font-sans text-sm tracking-widest transition-colors z-10"
                    >
                        SKIP
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
}
