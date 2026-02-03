import React from 'react'
import type { NavigateFunction } from 'react-router-dom';
import Button from './Button';
import styles from './Choices.module.css';
import { loadProgress, saveProgress } from '../../types/storage';

type ChoicesProps = {
    data: {
        optionA: string;
        nextA: number | null;
        optionB: string | null;
        nextB: number | null;
    };
    navigate: NavigateFunction;
}



const Choices: React.FC<ChoicesProps> = ({ data, navigate }) => {
    const handleGamebookComplete = () => {
        const progress = loadProgress();
        saveProgress({
            currentPath: '/minigame/moneygrab',
            completedMinigames: [...(progress?.completedMinigames || []), 'gamebook']
        });
        navigate('/minigame/moneygrab', { replace: true });
    };

    return (
        <div className={styles.choices}>
            {data.optionA && data.nextA != null && (
                <Button color="blue" onClick={() => navigate(`/gamebook/${data.nextA}`)} text={data.optionA} />
            )}

            {data.optionB && data.nextB != null && (
                <Button color="white" onClick={() => navigate(`/gamebook/${data.nextB}`)} text={data.optionB} />
            )}

            {data.nextA == null && data.nextB == null && (
                <Button color="blue" onClick={handleGamebookComplete} text={data.optionA} />
            )}
        </div>
    )
}

export default Choices