import MoneyGrabContent from "./MoneyGrabContent";
import styles from "./Money.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ScoreCounter, { type ScoreCounterHandle } from "../../ui/ScoreCounter"

export default function Money() {
    const navigate = useNavigate();
    const scoreRef = useRef<ScoreCounterHandle>(null);
    const [finished, setFinished] = useState(false);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Seber co nejvíc bankovek!</h1>

            {!finished && (
                <MoneyGrabContent
                    onCollect={(amount) => scoreRef.current?.addScore(amount)}
                    onFinish={() => {
                        setFinished(true);
                        navigate("/rules/");
                    }}
                />
            )}

            <ScoreCounter ref={scoreRef} style="styled" />
        </div>
    );
}