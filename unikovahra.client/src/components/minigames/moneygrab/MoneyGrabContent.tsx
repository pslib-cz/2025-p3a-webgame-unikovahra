import { useEffect, useRef, useState } from "react";
import styles from "./MoneyGrabContent.module.css";

type Bill = {
    id: number;
    x: number;
    y: number;
};

type MoneyGrabProps = {
    timelimit: number;
    onCollect: (amount: number) => void;
    onFinish: (success: boolean, totalCollected: number, timeLeft: number) => void;
};

const MoneyGrabContent: React.FC<MoneyGrabProps> = ({ timelimit, onCollect, onFinish }) => {
    const gameRef = useRef<HTMLDivElement>(null);
    const collectBillSoundRef = useRef<HTMLAudioElement | null>(null);

    const [light, setLight] = useState({ x: 0, y: 0 });
    const [bills, setBills] = useState<Bill[]>([]);
    const [flicker, setFlicker] = useState(false);
    const [timeLeft, setTimeLeft] = useState(timelimit);
    const [finished, setFinished] = useState(false);
    const [collectedAmount, setCollectedAmount] = useState(0);
    const TotalBills = 20;
    
    useEffect(() => {
        collectBillSoundRef.current = new Audio("/sfx/money-grab.mp3");
        collectBillSoundRef.current.volume = 0.3;
    }, []);

    useEffect(() => {
        const generated: Bill[] = Array.from({ length: TotalBills }).map(
            (_, i) => ({
                id: i,
                x: Math.random() * 90,
                y: 15 + Math.random() * 80,
            })
        );
        setBills(generated);
    }, []);

    useEffect(() => {
        let rafId: number;

        const updateLight = (clientX: number, clientY: number) => {
            if (!gameRef.current) return;
            const rect = gameRef.current.getBoundingClientRect();
            
            rafId = requestAnimationFrame(() => {
                setLight({
                    x: clientX - rect.left,
                    y: clientY - rect.top,
                });
            });
        };

        const handleMove = (e: MouseEvent) => {
            updateLight(e.clientX, e.clientY);
        };

        const handleTouch = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                updateLight(touch.clientX, touch.clientY);
            }
        };

        const el = gameRef.current;
        el?.addEventListener("mousemove", handleMove);
        el?.addEventListener("touchmove", handleTouch, { passive: true });
        
        return () => {
            el?.removeEventListener("mousemove", handleMove);
            el?.removeEventListener("touchmove", handleTouch);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlicker(true);
            setTimeout(() => setFlicker(false), 150);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (finished) return;

        if (timeLeft <= 0) {
            setFinished(true);
            onFinish(collectedAmount > 0, collectedAmount, timeLeft);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, finished, onFinish, collectedAmount]);

    const collectBill = (id: number) => {
        if (finished) return;

        const billValue = 5000;
        setCollectedAmount((prev) => prev + billValue);
        onCollect(billValue);

        setBills((prev) => {
            const updated = prev.filter((b) => b.id !== id);
            if (updated.length === 0) {
                setFinished(true);
                onFinish(true, collectedAmount + billValue, timeLeft);
            }
            return updated;
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.time} style={{
                color: timeLeft <= 5 ? "red" : "black",
            }}
            >
                Čas: {timeLeft}s
            </div>

            <div className={styles.game} ref={gameRef}>
                {bills.map((bill) => (
                    <div
                        key={bill.id}
                        className={styles.bill}
                        style={{ left: `${bill.x}%`, top: `${bill.y}%` }}
                        onClick={() => {
                            collectBill(bill.id);
                            if (collectBillSoundRef.current) {
                                collectBillSoundRef.current.playbackRate = 1 + Math.random() * 0.5;
                                collectBillSoundRef.current.currentTime = 0;
                                collectBillSoundRef.current.play().catch(() => {});
                            }
                        }}
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

export default MoneyGrabContent;