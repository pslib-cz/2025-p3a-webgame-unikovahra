import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultScreen from '../components/ui/ResultScreen';
import Button from '../components/ui/Button';
import ScoreCounter, { type ScoreCounterHandle } from '../components/ui/ScoreCounter';

const MoneyGrabPage = () => {
  const navigate = useNavigate();
  const scoreRef = useRef<ScoreCounterHandle>(null); // ref na ScoreCounter
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    scoreRef.current?.addScore(); // přidá skóre
    setSuccess(true);
    setShowResult(true);
  };

  const handleFailure = () => {
    scoreRef.current?.deductScore(); // odečte skóre
    setSuccess(false);
    setShowResult(true);
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
      <ResultScreen
        title="Neúspěch"
        message="Nepodařilo se ti sebrat dost peněz."
        buttonText="Zkusit znovu"
        buttonColor="white"
        onButtonClick={() => navigate('/')}
      />
    );
  }

  return (
    <div>
      <p>Seber co nejvíc bankovek!</p>

      <Button text="Simulovat úspěch" onClick={handleSuccess} color="blue" />
      <Button text="Simulovat neúspěch" onClick={handleFailure} color="white" />
      
      <ScoreCounter ref={scoreRef} adder={1000} penalty={1000} />
    </div>
  );
};

export default MoneyGrabPage;