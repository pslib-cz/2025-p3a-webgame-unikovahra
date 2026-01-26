import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ScoreCounterHandle } from '../ui/ScoreCounter';
import Button from '../ui/Button';
import ScoreCounter from '../ui/ScoreCounter';
import styles from './MissionEnd.module.css'


const MissionEnd = () => {
    const navigate = useNavigate();
    const scoreRef = useRef<ScoreCounterHandle>(null);

    const handleRestart = () => {
        localStorage.removeItem('gameProgress');
        scoreRef.current?.resetScore();
        navigate("/");
    }

    return (
        <div><h1><span className={styles.title} > Konec mise </span></h1>
            <p className={styles.text}>Rozhodl ses misi ukončit. Tvoje cesta zde končí a další postup už není možný. V tuto chvíli už nic nemůžeš změnit, tvůj příběh je uzavřen. Jedinou možností je začít celou hru znovu a pokusit se o úspěch od začátku.</p>
            <Button text="Hrát znovu" onClick={handleRestart} color="red"></Button>
            <ScoreCounter ref={scoreRef} style={"hidden"} />
        </div>
    )
}

export default MissionEnd