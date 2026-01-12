import React, { useEffect } from 'react'
import { useState } from 'react'
import MemoryCell from './MemoryCell'
import styles from './MemoryGrid.module.css'
import MusicPlayer from '../../../context/MusicContext'
import Button from '../../ui/Button'

type MemoryGridProps = {
    size: number;
    sequenceLength: number;
    onSuccess: () => void;
    onFailure: () => void;
}

const MemoryGrid: React.FC<MemoryGridProps> = ({ size, sequenceLength, onSuccess, onFailure }) => {
    const [sequence, setSequence] = useState<number[]>([]);
    const [playerSequence, setPlayerSequence] = useState<number[]>([]);
    const [showing, setShowing] = useState(false);
    const [showIndex, setShowIndex] = useState(0);
    const [lit, setLit] = useState(-1);


    const total = size * size;

    const StartGame = () => {
        const seq: number[] = [];

        for (let i = 0; i < sequenceLength; i++) {
            seq.push(Math.floor(Math.random() * total));
        }
        setSequence(seq);
        setPlayerSequence([]);
        setShowing(true);
        setShowIndex(0);
    }

    useEffect(() => {
        if (showing && showIndex < sequence.length) {
            const timeout = setTimeout(() => {
                setLit(sequence[showIndex]);
                setTimeout(() => {
                    setLit(-1);
                    setShowIndex(showIndex + 1);
                }, 500);
            }, 700);
            return () => clearTimeout(timeout);
        } else if (showing && showIndex >= sequence.length) {
            setTimeout(() => setShowing(false), 0);
        }
    }, [showing, showIndex, sequence]);

    const handleCellClick = (index: number) => {
        if (showing) return;

        const newPlayerSequence = [...playerSequence, index];
        setPlayerSequence(newPlayerSequence);
        if (sequence[newPlayerSequence.length - 1] !== index) {
            onFailure();
            return;
        }
        if (newPlayerSequence.length === sequence.length) {
            onSuccess();
        }
    }



    return (
        <div className={`${styles.grid} ${styles['size-' + size]}`} >
            {Array.from({ length: total }).map((_, index) => (
                <MemoryCell
                    
                    key={index}
                    isLit={lit === index}
                    disabled={showing}
                    onClick={() => handleCellClick(index)}
                />
            ))}
            <Button onClick={StartGame} text='Začít' color='blue' />


        </div>
    )
}

export default MemoryGrid