import Button from "./Button";
import type { Colors } from "../../types/Colors";
import ScoreCounter, { type ScoreCounterHandle } from "./ScoreCounter";
import MoneyGrabPage from "../../pages/MoneyGrabPage";
type ResultScreenProps = {
  title: string;
  message: string;
  buttonText: string;
  buttonColor?: Colors;
  onButtonClick: () => void;
  
};

const ResultScreen = ({ title, message, buttonText, buttonColor, onButtonClick }: ResultScreenProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <ScoreCounter style={"notStyled"}/>
      <Button text={buttonText} onClick={onButtonClick} color={buttonColor} />
    </div>
  );
};

export default ResultScreen;
