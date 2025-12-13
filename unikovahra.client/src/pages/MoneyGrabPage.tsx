import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultScreen from '../components/ui/ResultScreen';
import Button from '../components/ui/Button';

const MoneyGrabPage = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setShowResult(true);
  };

  const handleFailure = () => {
    setSuccess(false);
    setShowResult(true);
  };

  if (showResult) {
    if (success) {
      return (
        <ResultScreen
          title="Úspěch!"
          message="Povedlo se ti sebrat peníze!"
          buttonText="Pokračovat"
          buttonColor="blue"
          onButtonClick={() => navigate('/rules/')}
        />
      );
    } else {
      return (
        <ResultScreen
          title="Neúspěch"
          message="Nepodařilo se ti sebrat dost peněz."
          buttonText="Zkusit znovu"
          buttonColor="white"
          onButtonClick={() => navigate('/')}
        />
      );
    }
  }

  return (
    <div>
      <p>Seber co nejvíc bankovek!</p>
      
      <Button text="Simulovat úspěch" onClick={handleSuccess} color="blue" />
      <Button text="Simulovat neúspěch" onClick={handleFailure} color="white" />
    </div>
  );
};

export default MoneyGrabPage;