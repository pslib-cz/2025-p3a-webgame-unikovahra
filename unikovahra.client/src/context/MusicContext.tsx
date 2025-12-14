import React, { useEffect, useRef } from "react";

interface MusicPlayerProps {
  src: string;          // cesta k souboru s hudbou
  volume?: number;      // hlasitost 0.0 - 1.0, default 0.5
  loop?: boolean;       // jestli se hudba má opakovat, default true
  autoPlay?: boolean;   // jestli se má automaticky spustit, default true
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

    // pokud je autoPlay true, počkáme na první interakci uživatele
    if (autoPlay) {
      window.addEventListener("click", startAudio);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("click", startAudio);
    };
  }, [src, volume, loop, autoPlay]);

  return null; // nic nevykresluje
};

export default MusicPlayer;