import React from 'react';
import styles from './GamebookContent.module.css';
import ImageDisplay from '../../ui/ImageDisplay';
import Choices from '../../ui/Choices';

type GamebookContentProps = {
  header: string;
  text: string;
  imageUrl?: string | null;
  optionA: string;
  nextA: number | null;
  optionB: string | null;
  nextB: number | null;
  navigate: (path: string) => void;
};

const GamebookContent:React.FC<GamebookContentProps> = ({
  header,
  text,
  imageUrl,
  optionA,
  nextA,
  optionB,
  nextB,
  navigate
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>TIME IS <span className='marked'> MONEY</span></p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <ImageDisplay data={{ header: "TIME IS MONEY", imageUrl }} />
        </div>

        <div className={styles.textSection}>
          <h2 className={styles.subtitle}>{header}</h2>
          <p className={styles.text}>{text}</p>
          
          <div className={styles.choicesWrapper}>
            <Choices 
              data={{ optionA, nextA, optionB, nextB }} 
              navigate={navigate} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamebookContent;