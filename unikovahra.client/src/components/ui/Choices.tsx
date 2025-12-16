import React from 'react'
import Button from './Button';
import styles from './Choices.module.css';

type ChoicesProps = {
    data: {
        optionA: string | null;
        nextA: number | null;
        optionB: string | null;
        nextB: number | null;
    };
    navigate: (path: string) => void;
}



const Choices: React.FC<ChoicesProps> = ({ data, navigate }) => {
    return (
        <div className={styles.choices}>
            {data.optionA && data.nextA != null && (
                <Button color="blue" onClick={() => navigate(`/gamebook/${data.nextA}`)} text={data.optionA} />
            )}

            {data.optionB && data.nextB != null && (
                <Button color="white" onClick={() => navigate(`/gamebook/${data.nextB}`)} text={data.optionB} />
            )}

            {data.nextA == null && data.nextB == null && (
                <Button color="blue" onClick={() => navigate('/minigame/moneygrab')} text="Pokračovat" />
            )}
        </div>
    )
}

export default Choices