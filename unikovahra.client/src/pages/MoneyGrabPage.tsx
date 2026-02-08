import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultScreen from "../components/ui/ResultScreen";
import MoneyGrabContent from "../components/minigames/moneygrab/MoneyGrabContent";
import MusicPlayer from "../context/MusicContext";
import { loadProgress, saveProgress } from "../types/storage";
import ScoreCounter, { type ScoreCounterHandle } from "../components/ui/ScoreCounter";
import { showAchievement } from "../types/achievements";

export default function MoneyGrabPage() {
    const navigate = useNavigate();
    const [finished, setFinished] = useState(false);
    const [success, setSuccess] = useState(false);
    const scoreRef = useRef<ScoreCounterHandle>(null);
    const [finalScore, setFinalScore] = useState(0);

    const handleCollect = (amount: number) => {
        scoreRef.current?.addScore(amount);
    };

    const handleFinish = (isSuccess: boolean, totalCollected: number, timeLeft: number) => {
        setSuccess(isSuccess);
        setFinished(true);
        setFinalScore(totalCollected);

        localStorage.setItem('playerScore', totalCollected.toString());

        if (isSuccess) {
            const progress = loadProgress();
            saveProgress({
                currentPath: '/rules/',
                completedMinigames: [...(progress?.completedMinigames || []), 'moneygrab']
            });


            if (timeLeft > 15) {
                showAchievement('speedrunner');
            }

            if (totalCollected >= 80000) {
                showAchievement('rich');
            }
        } else if (!isSuccess && totalCollected === 0) {
            showAchievement('broke');
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0' ||
            e.key === '=' || e.keyCode === 107 || e.keyCode === 109)) {
            e.preventDefault();
        }
    });
    
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) e.preventDefault();
    }, { passive: false });


    if (finished) {
        return success ? (
            <ResultScreen
                title={<>Povedlo se ti nasbírat <span className='marked'>${finalScore}</span> <span className='marked'>Dolarů</span></>}
                message="Taška je plná bankovek a jejich váha ti připomíná, že ses dostal přesně tam, kam jsi chtěl. Trezor za tebou zůstává tichý, ale víš, že tady se zdržet nemůžeš. Nasbírané peníze máš u sebe, jenže to nejtěžší teprve přijde. Musíš se dostat
                z banky ven, projít dalšími překážkami a zvládnout řadu úkolů, které rozhodnou
                o tom, jestli tahle akce skončí úspěchem nebo neúspěchem...."
                buttonText="Pravidla"
                buttonColor="blue"
                onButtonClick={() => navigate('/rules/', { replace: true })}
            />
        ) : (
            <ResultScreen
                title={<>Nepodařilo se ti nasbírat <span className='marked--failure'>žádné dolary</span></>}
                message="Trezor zůstává prázdný a tvoje taška lehká. Nepodařilo se ti získat ani jednu bankovku, a proto nemáš žádný základ pro další postup. Čas uběhl a šance je promarněna. Bez minimálního zisku nemůžeš pokračovat dál a mise tímto končí neúspěchem.
                Jedinou možností je začít hru znovu."
                buttonText="Zkusit znovu"
                buttonColor="white"
                onButtonClick={() => { navigate('/gamebook/7') }}
            />
        );
    }

    return (
        <>
            <MoneyGrabContent
                timelimit={15}
                onCollect={handleCollect}
                onFinish={handleFinish}
            />
            <MusicPlayer src="../sfx/background-noise.mp3" volume={0.04} />
            <ScoreCounter ref={scoreRef} style="styled" saveToStorage={false} />
        </>
    );
}
