import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from './ScoreCounter.module.css';

interface ScoreCounterProps {
  penalty?: number; // kolik bodů odečíst při chybě
  adder?: number;   // kolik bodů přidat při úspěchu
}

export interface ScoreCounterHandle {
  addScore: (points?: number) => void;
  deductScore: (points?: number) => void;
}

const ScoreCounter = forwardRef<ScoreCounterHandle, ScoreCounterProps>(
  ({ penalty = 5, adder = 10 }, ref) => {
    const [score, setScore] = useState<number>(0);

    // načtení skóre při mountu
    useEffect(() => {
      const savedScore = localStorage.getItem('playerScore');
      if (savedScore) setScore(parseInt(savedScore, 10));
    }, []);

    const addScore = (points: number = adder) => {
      const newScore = score + points;
      setScore(newScore);
      localStorage.setItem('playerScore', newScore.toString());
    };

    const deductScore = (points: number = penalty) => {
      const newScore = Math.max(0, score - points);
      setScore(newScore);
      localStorage.setItem('playerScore', newScore.toString());
    };

    // expose funkce přes ref
    useImperativeHandle(ref, () => ({
      addScore,
      deductScore
    }));

    return (
      <div className={styles.scoreCounter}>
        <h2>Skóre: {score}</h2>
      </div>
    );
  }
);

export default ScoreCounter;