import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from './ScoreCounter.module.css';

interface ScoreCounterProps {
  penalty?: number;
  adder?: number;
  style: "hidden" | "styled" | "notStyled";
  saveToStorage?: boolean;
}


export interface ScoreCounterHandle {
  addScore: (points?: number) => void;
  deductScore: (points?: number) => void;
  resetScore: () => void;
  getScore: () => number;
}


const ScoreCounter = forwardRef<ScoreCounterHandle, ScoreCounterProps>(
  ({ penalty = 0, adder = 0, style = "styled", saveToStorage = true }, ref) => {
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
      if (saveToStorage) {
        const savedScore = localStorage.getItem('playerScore');
        if (savedScore) setScore(parseInt(savedScore, 10));
      }
    }, [saveToStorage]);


    const addScore = (points: number = adder) => {
      const newScore = score + points;
      setScore(newScore);
      if (saveToStorage) {
        localStorage.setItem('playerScore', newScore.toString());
      }
    };
    const deductScore = (points: number = penalty) => {
      const newScore = Math.max(0, score - points);
      setScore(newScore);
      if (saveToStorage) {
        localStorage.setItem('playerScore', newScore.toString());
      }
    };
    const resetScore = () => {
      setScore(0);
      if (saveToStorage) {
        localStorage.setItem('playerScore', '0');
      }
    };
    const getScore = () => score;

    useImperativeHandle(ref, () => ({
      addScore,
      deductScore,
      resetScore,
      getScore,
    }));
    if (style == "styled") {
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