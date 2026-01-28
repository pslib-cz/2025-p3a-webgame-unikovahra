import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import SwitchboardContent from '../components/minigames/switchboard/SwitchboardContent'
import { loadProgress, saveProgress } from '../types/storage'
const SwitchboardPage = () => {
  const navigate = useNavigate();
  const roomId = 1;


  const handleSuccess = () => {
    const progress = loadProgress();
    saveProgress({
      currentPath: '/minigame/finish/1/true',
      completedMinigames: [...(progress?.completedMinigames || []), 'switchboard']
    });
    navigate('/minigame/finish/1/true');
  };


  return (
    <>
      <SwitchboardContent />
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
      <ScoreCounter style="styled" />
    </>
  )
}

export default SwitchboardPage