import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useEffect, useRef } from "react";
import  MusicPlayer  from "../context/MusicContext";

export default function StartPage() {
  const navigate = useNavigate();


  const handleStart = () => {
    navigate("/gamebook");
    
  };

  return (
    <div>
      <Button color="blue" onClick={handleStart} text="START" />
      <MusicPlayer src="../sfx/waiting-music.mp3" volume={0.3} loop={true} autoPlay={true}></MusicPlayer>
    </div>
  );
};
