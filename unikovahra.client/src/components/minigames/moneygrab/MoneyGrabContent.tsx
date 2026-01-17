import { useEffect, useRef, useState } from "react";
import styles from "./MoneyGrabContent.module.css";

type Bill = {
    id: number;
    x: number;
    y: number;
};

type Props = {
    onCollect: (amount: number) => void;
    onFinish: (success: boolean) => void;
};

export default function MoneyGrabContent({ onCollect, onFinish }: Props) {
    const gameRef = useRef<HTMLDivElement>(null);
    const [light, setLight] = useState({ x: 0, y: 0 });
    const [bills, setBills] = useState<Bill[]>([]);
    const [flicker, setFlicker] = useState(false);
    const TotalBills = 20;

    useEffect(() => {
        const generated: Bill[] = Array.from({ length: TotalBills }).map(
            (_, i) => ({
                id: i,
                x: Math.random() * 85,
                y: Math.random() * 80,
            })
        );
        setBills(generated);
    }, []);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (!gameRef.current) return;
            const rect = gameRef.current.getBoundingClientRect();
            setLight({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const el = gameRef.current;
        el?.addEventListener("mousemove", handleMove);
        return () => el?.removeEventListener("mousemove", handleMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlicker(true);
            setTimeout(() => setFlicker(false), 150);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const collectBill = (id: number) => {
        onCollect(5000);
        setBills((prev) => {
            const updated = prev.filter((b) => b.id !== id);
            if (updated.length === 0) {
                onFinish(true);
            }
            return updated;
        });
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.game} ref={gameRef}>
                {bills.map((bill) => (
                    <div
                        key={bill.id}
                        className={styles.bill}
                        style={{ left: `${bill.x}%`, top: `${bill.y}%` }}
                        onClick={() => collectBill(bill.id)}
                    >
                        $$$
                    </div>
                ))}

                <div className={styles.darkness} />
                <div
                    className={styles.light}
                    style={{
                        background: flicker
                            ? `radial-gradient(
                        80px at ${light.x}px ${light.y}px,
                            rgba(0,0,0,0) 0%,      
                            rgba(0,0,0,0) 0%,
                            rgba(0,0,0,0.9) 0%)`
                            : `radial-gradient(
                        140px at ${light.x}px ${light.y}px,
                            rgba(0,0,0,0) 20%,
                            rgba(0,0,0,0.8) 50%,
                            rgba(0,0,0,0.9) 0%)`,
                    }}
                />
            </div>
        </div>
    );
}