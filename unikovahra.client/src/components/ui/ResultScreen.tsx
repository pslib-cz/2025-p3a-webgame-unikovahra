import Button from "./Button";
import type { Colors } from "../../types/Colors";

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
      <Button text={buttonText} onClick={onButtonClick} color={buttonColor} />
    </div>
  );
};

export default ResultScreen;
