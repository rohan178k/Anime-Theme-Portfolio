"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function ScrollEngine() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isVertical, setIsVertical] = useState(false);
    const { scrollYProgress } = useScroll();

    const FRAME_COUNT = 295;

    // Detect orientation
    useEffect(() => {
        const handleResize = () => setIsVertical(window.innerHeight > window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const orient = isVertical ? "vertical" : "horizontal";
            const promises: Promise<void>[] = [];
            const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/resources/home-${orient}/home-scroll-bg-frames-${orient}/ezgif-frame-${paddedIndex}.jpg`;

                const p = new Promise<void>((resolve) => {
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = () => resolve(); // skip on error so we don't hang
                });
                promises.push(p);
            }

            // Wait for all to finish concurrently instead of sequentially
            await Promise.all(promises);
            setImages(loadedImages);
        };

        loadImages();
    }, [isVertical]);

    // Initial draw once first image is loaded
    useEffect(() => {
        if (images.length > 0 && canvasRef.current) {
            renderFrame(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images]);

    const renderFrame = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Maintain aspect ratio cover
        const canvas = canvasRef.current;
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Custom Easing function (Sine Ease In Out) to make scrolling slower inside sections and faster between.
    // It maps linear scroll [0, 1] to a non-linear path.
    const easeInOutSine = (x: number): number => {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;

        // Apply ease mapping
        const easedProgress = easeInOutSine(latest);

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(easedProgress * FRAME_COUNT)
        );
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-screen h-screen">
            <canvas
                ref={canvasRef}
                width={typeof window !== "undefined" ? window.innerWidth : 1920}
                height={typeof window !== "undefined" ? window.innerHeight : 1080}
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        </div>
    );
}
