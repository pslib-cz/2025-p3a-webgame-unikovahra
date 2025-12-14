import React, { useEffect, useRef } from "react";

interface MusicPlayerProps {
  src: string;          
  volume?: number;      
  loop?: boolean;       
  autoPlay?: boolean;   
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src,
  volume = 0.5,
  loop = true,
  autoPlay = true,
}) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = loop;
    audio.volume = volume;

    const startAudio = () => {
      audio.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
      window.removeEventListener("click", startAudio);
    };

   
    if (autoPlay) {
      window.addEventListener("click", startAudio);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", startAudio);
    };
  }, [src, volume, loop, autoPlay]);

  return null; 
};

export default MusicPlayer;