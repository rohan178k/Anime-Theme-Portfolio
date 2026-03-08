"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Timeline() {
    const { scrollYProgress } = useScroll();

    // For PC: height 60vh, track progress visually via top
    const knotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // For Mobile: width 60vw, track progress visually via left
    const knotX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            {/* PC Vertical Timeline */}
            <div className="hidden md:block fixed right-12 top-[20vh] h-[60vh] w-[2px] bg-foreground/10 z-30 rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 w-full bg-gradient-to-b from-comet-magenta to-comet-cyan shadow-[0_0_10px_#C2F3FE]"
                    style={{ height: knotY }}
                />
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-comet-cyan shadow-[0_0_15px_#C2F3FE] cursor-pointer"
                    style={{ top: knotY, marginTop: "-8px" }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="absolute inset-1 rounded-full bg-white opacity-80" />
                </motion.div>
            </div>

            {/* Mobile Horizontal Timeline */}
            <div className="block md:hidden fixed top-[12vh] left-[20vw] w-[60vw] h-[2px] bg-foreground/10 z-30 rounded-full overflow-hidden">
                <motion.div
                    className="absolute left-0 h-full bg-gradient-to-r from-comet-magenta to-comet-cyan shadow-[0_0_10px_#C2F3FE]"
                    style={{ width: knotX }}
                />
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-comet-cyan shadow-[0_0_10px_#C2F3FE] cursor-pointer"
                    style={{ left: knotX, marginLeft: "-6px" }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="absolute inset-1 rounded-full bg-white opacity-80" />
                </motion.div>
            </div>
        </>
    );
}
