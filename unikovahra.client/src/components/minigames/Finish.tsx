import React, { useRef, useState } from 'react'
import type { ScoreCounterHandle } from '../ui/ScoreCounter';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import ScoreCounter from '../ui/ScoreCounter';
import styles from './Finish.module.css';



const Finish = () => {
    const [handleClick, setHandleClick] = useState(false);
    const navigate = useNavigate();
    const scoreRef = useRef<ScoreCounterHandle>(null);

    const getScore = () => {
        const savedScore = localStorage.getItem('playerScore');
        return savedScore ? parseInt(savedScore, 10) : 0;
    };

    const score = getScore();
    const rohlikyCount = 0.15 * score;
    const microbitCount = 17 * score;


    return (
        <div className='wrap wrap--centered wrap--fullycentered'>
            {!handleClick ? (
                <div>
                    <h1 className={styles.title}>Výhra!</h1>
                    <h2 className={styles.subtitle}>Povedlo se ti utéct z banky!</h2>
                    <p className={styles.description}>Dokázal jsi zadat správný čtyřmístný PIN a displej potvrdil tvou identitu. Hlavní dveře banky se otevřely a cesta k úniku je volná. Gratulujeme, tímto jsi úspěšně dokončil všechny úkoly a vyhrál. Gratulujeme!
                        Teď se můžeš podívat, kolik peněz jsi během mise získal a co si za ně můžeš koupit. </p>
                    <Button text="Kolik jsem získal?" onClick={() => setHandleClick(true)} color="gold"></Button>
                </div>
            ) : (
                <div>
                    <h2 className={styles.scoreTitle} >Za <span className='marked'>${score}</span></h2>
                    <p className={styles.scoreSubtitle}>Si můžeš koupit</p>
                    <p className={styles.scoreDescription}>{rohlikyCount} Rohlíků</p>
                    <p className={styles.scoreDescription}>{microbitCount} Microbitů</p>
                    <Button text="Hrát znovu" onClick={() => { scoreRef.current?.resetScore(); navigate("/") }} color="gold"></Button>
                    <ScoreCounter ref={scoreRef} style={"hidden"} />
                </div>
            )}
        </div>
    )
}

export default Finish