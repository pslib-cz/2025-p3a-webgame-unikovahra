import Button from "./Button";
import React, { useRef } from "react";
import type { Colors } from "../../types/Colors";
import ScoreCounter, { type ScoreCounterHandle } from "./ScoreCounter";
import styles from './ResultScreen.module.css';
// import MoneyGrabPage from "../../pages/MoneyGrabPage";
type ResultScreenProps = {
  title: React.ReactNode;
  message: string;
  buttonText: string;
  buttonColor?: Colors;
  onButtonClick: () => void;
  
};

const ResultScreen = ({ title, message, buttonText, buttonColor, onButtonClick }: ResultScreenProps) => {

      // const scoreRef = useRef<ScoreCounterHandle>(null);
  return (
    <div className="wrap wrap--centered wrap--fullycentered">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      {/* <ScoreCounter style={"notStyled"}/> */}
      <Button text={buttonText} onClick={onButtonClick} color={buttonColor} />
    </div>
  );
};

export default ResultScreen;
