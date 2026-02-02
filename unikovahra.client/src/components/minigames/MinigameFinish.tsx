import React from 'react'
import Button from '../ui/Button'
import ScoreCounter from '../ui/ScoreCounter'
import styles from './MinigameFinish.module.css'
import { clearProgress } from '../../types/storage'


type MinigameFinishDto = {
    id: number;
    roomId: number;
    successTitle: string;
    successSubtitle: string;
    successText: string;
    failureTitle: string;
    failureSubtitle: string;
    failureText: string;
};

type MinigameFinishProps = {
    data: MinigameFinishDto;
    isSuccess: boolean;
    roomIdNum: number;
    navigate: (path: string) => void;
    handleRetry: () => void;
    handleEndMission: () => void;
    scoreRef: React.RefObject<any>;
};

const MinigameFinish: React.FC<MinigameFinishProps> = ({ data, isSuccess, roomIdNum, navigate, handleRetry, handleEndMission, scoreRef }) => {

    const isLastMinigame = roomIdNum === 5;

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: isSuccess ? data.successTitle : data.failureTitle }} />
            <h3 className={styles.subtitle} dangerouslySetInnerHTML={{ __html: isSuccess ? data.successSubtitle : data.failureSubtitle }} />
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: isSuccess ? data.successText : data.failureText }} />

            <div>
                {isSuccess ? (
                    <div className={styles.buttons}>
                        {isLastMinigame ? (
                            <Button text="Dokončit hru" onClick={() => navigate('/finish')} color="gold" />
                        ) : (
                            <Button text="K další minihře" onClick={() => navigate(`/minigame/${roomIdNum + 1}`)} color="gold" />
                        )}
                        <Button text="Ukončit misi" onClick={handleEndMission} color="red" />
                    </div>
                ) : (
                    <div className={styles.buttons}>
                        <Button text="Začít znovu" onClick={handleRetry} color="gold" />
                        <Button text="Ukončit misi" onClick={handleEndMission} color="red" />
                        <ScoreCounter ref={scoreRef} style={"hidden"} />
                    </div>
                )}
            </div>
        </div>

    )

}

export default MinigameFinish