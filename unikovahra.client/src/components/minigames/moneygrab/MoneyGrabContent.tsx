import { useEffect, useRef, useState } from "react";
import styles from "./MoneyGrabContent.module.css";

export type MoneyGrabContentProps = {
    onCollect: (amount: number) => void;
    onFinish: (success: boolean) => void;
};

export default function MoneyGrabContent({
    onCollect,
    onFinish,
}: MoneyGrabContentProps) {
    const gameRef = useRef<HTMLDivElement | null>(null);
    const [light, setLight] = useState({ x: 0, y: 0 });
    const [bills, setBills] = useState<{ id: number; x: number; y: number }[]>([]);
    const [flicker, setFlicker] = useState(false);

    const totalBills = 20;

    useEffect(() => {
        const generated = Array.from({ length: totalBills }).map((_, i) => ({
            id: i,
            x: Math.random() * 85,
            y: Math.random() * 80,
        }));
        setBills(generated);
    }, []);

    //pohyb mysi = svetlo
    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (!gameRef.current) return;
            const rect = gameRef.current.getBoundingClientRect();
            setLight({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const el = gameRef.current;
        el?.addEventListener("mousemove", move);
        return () => el?.removeEventListener("mousemove", move);
    }, []);

    //sbirani bankovek
    const collectBill = (id: number) => {
        const value = 5000;

        onCollect(value);

        setBills((prev) => {
            const updated = prev.filter((b) => b.id !== id);

            if (updated.length === 0) {
                onFinish(true);
            }

            return updated;
        });
    };

    //blikani svetla
    useEffect(() => {
        const interval = setInterval(() => {
            setFlicker(true);

            setTimeout(() => {
                setFlicker(false);
            }, 200); //jak dlouho blikne
        }, 2500);

        return () => clearInterval(interval);
    }, []);


    return (
        
        <div className={styles.wrapper}>
            <div className={styles.game} ref={gameRef}>
                {/*bankovky */}
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

                {/*tmavý overlay – stále vidět */}
                <div className={styles.darkness} />

                {/* světlo kolem kurzoru – blikající */}
                <div
                    className={styles.light}
                    style={{
                        background: flicker
                            ? `radial-gradient(
                        80px at ${light.x}px ${light.y}px,
                        rgba(0,0,0,0) 0%,      
                        rgba(0,0,0,0.6) 0%,
                        rgba(0,0,0,0.9) 10%)`
                            : `radial-gradient(
                        140px at ${light.x}px ${light.y}px,
                            rgba(0,0,0,0) 50%,
                            rgba(0,0,0,0.8) 80%,
                            rgba(0,0,0,0.9) 100%)`,
                    }}
                />
            </div>
        </div>
    );
}