"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <MaxWidthWrapper className="max-w-400!">
      <section className="relative w-full h-[75vh] min-h-[600px] overflow-hidden rounded-[2rem]">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          // Placeholder poster just in case
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20">
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white max-w-5xl leading-tight tracking-[0-[0.02em]] mb-8 select-none">
            Gələcəyin texnologiyasını <br className="hidden md:block" /> daha
            yaxın edirik!
          </h1>
          <button className="px-8 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[15px] font-medium rounded-full transition-all duration-300">
            Biz kimik?
          </button>
        </div>
        {/*Gradient Overlay*/}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

        {/* Video Controls strictly matching your screenshot */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 z-20">
          <button
            onClick={() => {
              videoRef.current?.pause();
              setIsPlaying(false);
            }}
            className={`p-3 backdrop-blur-md text-white rounded-full transition-all duration-300 ${
              !isPlaying ? "bg-white/40" : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label="Pause"
          >
            <Pause size={18} fill="currentColor" className="opacity-90" />
          </button>

          <button
            onClick={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
            className={`p-3 backdrop-blur-md text-white rounded-full transition-all duration-300 ${
              isPlaying ? "bg-white/40" : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label="Play"
          >
            <Play size={18} fill="currentColor" className="opacity-90" />
          </button>

          <button
            onClick={() => {
              if (videoRef.current) videoRef.current.muted = false;
              setIsMuted(false);
            }}
            className={`p-3 backdrop-blur-md text-white rounded-full transition-all duration-300 ${
              !isMuted ? "bg-white/40" : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label="Volume On"
          >
            <Volume2 size={18} className="opacity-90" />
          </button>

          <button
            onClick={() => {
              if (videoRef.current) videoRef.current.muted = true;
              setIsMuted(true);
            }}
            className={`p-3 backdrop-blur-md text-white rounded-full transition-all duration-300 ${
              isMuted ? "bg-white/40" : "bg-white/20 hover:bg-white/30"
            }`}
            aria-label="Mute"
          >
            <VolumeX size={18} className="opacity-90" />
          </button>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
