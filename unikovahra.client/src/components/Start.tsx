import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  MusicPlayer  from '../context/MusicContext';
import styles from './Start.module.css';


const Start = () => {
    const navigate = useNavigate();
    const [isRotating, setIsRotating] = useState(false);


    const handleStart = () => {
        setIsRotating(true);
    };

    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes('rotateTrezor')) {
            navigate("/gamebook");
        }
    };
    
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.title}`}>TIME IS MONEY</h1>
            
            <img 
                src="/images/Trezor.svg" 
                alt="Trezor" 
                className={`${styles.trezorImage} ${isRotating ? styles.rotating : ''}`}
                onClick={handleStart}
                onAnimationEnd={handleAnimationEnd}
            />

            <button className={`${styles.btn}`}  onClick={handleStart} >START</button>
            <MusicPlayer src="../sfx/waiting-music.mp3" volume={0.3} loop={true} autoPlay={true}></MusicPlayer>
        </div>
    )
}

export default Start