import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultScreen from "../components/ui/ResultScreen";
import ScoreCounter, { type ScoreCounterHandle } from "../components/ui/ScoreCounter";
import MoneyGrabContent from "../components/minigames/moneygrab/MoneyGrabContent";

export default function MoneyGrabPage() {
    const navigate = useNavigate();
    const scoreRef = useRef<ScoreCounterHandle>(null);

    const [finished, setFinished] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleCollect = (amount: number) => {
        scoreRef.current?.addScore(amount);
    };

    const handleFinish = (isSuccess: boolean) => {
        setSuccess(isSuccess);
        setFinished(true);
    };

    if (finished) {
        return success ? (
            <ResultScreen
                title="Úspěch!"
                message="Sebral jsi všechny bankovky."
                buttonText="Pokračovat"
                buttonColor="blue"
                onButtonClick={() => navigate("/rules")}
            />
        ) : (
            <ResultScreen
                title="Neúspěch"
                message="Nepodařilo se ti nic sebrat."
                buttonText="Zkusit znovu"
                buttonColor="white"
                onButtonClick={() => navigate("/")}
            />
        );
    }

    return (
        <>
            <MoneyGrabContent
                onCollect={handleCollect}
                onFinish={handleFinish}
            />
            <ScoreCounter ref={scoreRef} style="styled" />
        </>
    );
}
