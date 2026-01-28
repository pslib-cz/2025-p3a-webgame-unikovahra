import React, { useState } from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import { loadProgress, saveProgress } from '../types/storage'


const KeylockPage = () => {
  const navigate = useNavigate();
  const roomId = 5;
  const [savedPin, setSavedPin] = useState<string | null>(() => localStorage.getItem('puzzlePin'));

  const handleSuccess = () => {
    const progress = loadProgress();
    saveProgress({
      currentPath: '/minigame/finish/5/true',
      completedMinigames: [...(progress?.completedMinigames || []), 'keylock']
    });
    navigate('/minigame/finish/5/true');
  };


  return (
    <>
      {savedPin && (
        <div>
          docasny ukazovac PINu z puzzle: {savedPin}
        </div>
      )}
      <Button
        text="Simulovat úspěch"
        onClick={handleSuccess}
        color="blue"
      />
      <Button
        text="Simulovat neúspěch"
        onClick={() => navigate(`/minigame/finish/${roomId}/false`)}
        color="white"
      />
      <ScoreCounter style={"styled"} />
    </>
  )
}

export default KeylockPage