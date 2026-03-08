"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gateway } from "@/components/Gateway";
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { ScrollEngine } from "@/components/ScrollEngine";
import { CometCursor } from "@/components/CometCursor";
import { AudioPlayer } from "@/components/AudioPlayer";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [gatewayDone, setGatewayDone] = useState(false);
  const [bgmReady, setBgmReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-700">
      <AnimatePresence>
        {!gatewayDone && (
          <Gateway
            onBgmStart={() => setBgmReady(true)}
            onComplete={() => setGatewayDone(true)}
          />
        )}
      </AnimatePresence>

      <ScrollEngine />

      {bgmReady && (
        <AudioPlayer isPlaying={!isMuted} />
      )}

      {gatewayDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <CometCursor />
          <Navbar isMuted={isMuted} toggleMute={() => setIsMuted(!isMuted)} />
          <Timeline />

          {/* Sections Overlay */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <HeroSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <AboutSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <SkillsSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <ProjectsSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <EducationSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <CertificationsSection />
            <div className="h-[30vh]" /> {/* Added Spacer */}
            <ContactSection />
          </div>
        </motion.div>
      )}
    </main>
  );
}
