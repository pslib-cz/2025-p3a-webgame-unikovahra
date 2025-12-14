import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultScreen from '../components/ui/ResultScreen';
import Button from '../components/ui/Button';
import ScoreCounter, { type ScoreCounterHandle } from '../components/ui/ScoreCounter';
const MoneyGrabPage = () => {
  const navigate = useNavigate();
  const scoreRef = useRef<ScoreCounterHandle>(null);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
    const audioRef = useRef(new Audio("../public/sfx/money-grab.mp3"));

  const handleSuccess = () => {
    setSuccess(true);
    setShowResult(true);
  };

  const handleFailure = () => {
    setSuccess(false);
    setShowResult(true);
  };


  const playSound = () => {
    audioRef.current.currentTime = 0.35; 
    audioRef.current.play();
  };
      const handleAdder = () => {
      scoreRef.current!.addScore(10000); 

};
  if (showResult) {
    return success ? (
      <ResultScreen
        title="Úspěch!"
        message="Povedlo se ti sebrat peníze!"
        buttonText="Pokračovat"
        buttonColor="blue"
        onButtonClick={() => navigate('/rules/')}
      />
    ) : (
      <>
      <ResultScreen
        title="Neúspěch"
        message="Nepodařilo se ti sebrat dost peněz."
        buttonText="Zkusit znovu"
        buttonColor="white"
        onButtonClick={() => {navigate('/')}}
      />
      <ScoreCounter style='styled'/>
      </>
    );
  }

  return (
    <div>
      <p>Seber co nejvíc bankovek!</p>

      <Button text="Simulovat úspěch" onClick={handleSuccess} color="blue" />
      <Button text="Simulovat neúspěch" onClick={handleFailure} color="white" />
      <Button text="Simulace klikani peněz v safu" onClick={() => {handleAdder() ; playSound() }}/>
      <Button text="reset peněz" onClick={()=> scoreRef.current?.resetScore()}/>
      <ScoreCounter ref={scoreRef} style={"styled"} />

    </div>
  );
};

export default MoneyGrabPage;