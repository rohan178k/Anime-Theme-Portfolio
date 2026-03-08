"use client";

import { useEffect, useRef } from "react";

export function AudioPlayer({ isPlaying }: { isPlaying: boolean }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = 0.5;
        if (isPlaying) {
            audioRef.current.play().catch(console.error);
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <audio ref={audioRef} loop src="/resources/background-music.mp3" />
    );
}
