import React from 'react';
import styles from './MinigameRules.module.css';
import Button from '../ui/Button';
import ImageDisplay from '../ui/ImageDisplay';


type MinigameRulesProps = {
  introTitle: string;
  introSubtitle: string;
  introText: string;
  introTaskSubtitle: string;
  introTaskText: string;
  imageUrl: string;
  onStart: () => void;
};

const MinigameRules: React.FC<MinigameRulesProps> = ({
  introTitle,
  introSubtitle,
  introText,
  introTaskSubtitle,
  introTaskText,
  imageUrl,
  onStart
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title} dangerouslySetInnerHTML={{ __html: introTitle }} />

      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <ImageDisplay data={{ header: introTitle, imageUrl }} />
        </div>

        <div className={styles.textSection}>
          <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: introSubtitle }} />
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: introText }} />
          <p className={styles.taskSubtitle} dangerouslySetInnerHTML={{ __html: introTaskSubtitle }} />
          <p className={styles.taskText} dangerouslySetInnerHTML={{ __html: introTaskText }} />   
          <div className={styles.buttonWrapper}>
          <Button onClick={onStart} text="Jdu na to" color="gold" className={styles.button} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default MinigameRules;