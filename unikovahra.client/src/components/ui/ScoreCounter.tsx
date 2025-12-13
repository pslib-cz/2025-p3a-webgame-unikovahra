import React, { useState, useEffect, forwardRef, useImperativeHandle} from "react";
import styles from './ScoreCounter.module.css';

interface ScoreCounterProps {
  penalty?: number;
  adder?: number;
  style: "hidden" | "styled" | "notStyled";
}

export interface ScoreCounterHandle {
  addScore: (points?: number) => void;
  deductScore: (points?: number) => void;
  resetScore: () => void;
}

const ScoreCounter = forwardRef<ScoreCounterHandle, ScoreCounterProps>(
  ({ penalty = 0, adder = 0, style = "styled" }, ref) => {
    const [score, setScore] = useState<number>(0);

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
    const resetScore = () => {
      setScore(0);
      localStorage.setItem('playerScore', '0');
    };
    useImperativeHandle(ref, () => ({
      addScore,
      deductScore,
      resetScore,


    }));
    if ( style == "styled") {
      return (
        <div className={styles.scoreCounter}>
          <span>${score}</span>
        </div>
      )
    }
    else if (style == "notStyled") {
      return (
        <span>${score}</span>
      );
    } else {
      return null;
    }

  }
);

export default ScoreCounter;