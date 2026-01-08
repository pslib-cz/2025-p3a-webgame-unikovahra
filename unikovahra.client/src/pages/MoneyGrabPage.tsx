import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultScreen from '../components/ui/ResultScreen';
import ScoreCounter, { type ScoreCounterHandle } from '../components/ui/ScoreCounter';
import MoneyGrabContent from '../components/minigames/moneygrab/MoneyGrabContent';


const MoneyGrabPage = () => {
  const navigate = useNavigate();
  const scoreRef = useRef<ScoreCounterHandle>(null);

  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);

  const audioRef = useRef(new Audio('/sfx/money-grab.mp3'));

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

  const handleCollect = (amount: number) => {
    scoreRef.current?.addScore(amount);
    playSound();
  };

  const handleFinish = (isSuccess: boolean) => {
    isSuccess ? handleSuccess() : handleFailure();
  };

  if (showResult) {
    return success ? (
      
      <ResultScreen
        title={<>Povedlo se ti nasbírat {/*pridat*/} <span className='marked'>Dolarů</span></>}
        message="Taška je plná bankovek a jejich váha ti připomíná, že ses dostal přesně tam, kam jsi chtěl. Trezor za tebou zůstává tichý, ale víš, že tady se zdržet nemůžeš. Nasbírané peníze máš u sebe, jenže to nejtěžší teprve přijde. Musíš se dostat 
        z banky ven, projít dalšími překážkami a zvládnout řadu úkolů, které rozhodnou 
        o tom, jestli tahle akce skončí úspěchem nebo neúspěchem...."
        buttonText="Pravidla"
        buttonColor="blue"
        onButtonClick={() => navigate('/rules/')}
      />
    ) : (
      <>
        <ResultScreen
          title={<>Nepodařilo se ti nasbírat <span className='marked--failure'>žádné dolary</span></>}
          message="Trezor zůstává prázdný a tvoje taška lehká. Nepodařilo se ti získat ani jednu bankovku, a proto nemáš žádný základ pro další postup. Čas uběhl a šance je promarněna. Bez minimálního zisku nemůžeš pokračovat dál a mise tímto končí neúspěchem.
          Jedinou možností je začít hru znovu."
          buttonText="Zkusit znovu"
          buttonColor="white"
          onButtonClick={() => { navigate('/') }}
        />
        <ScoreCounter style='styled' />
      </>
    );
  }

  return (
    <div>
      <p>Seber co nejvíc bankovek!</p>

      {}
      <MoneyGrabContent
        onCollect={handleCollect}
        onFinish={handleFinish}
      />

      <ScoreCounter ref={scoreRef} style="styled" />
    </div>
  );
};

export default MoneyGrabPage;
