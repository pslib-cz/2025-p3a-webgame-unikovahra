import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import SwitchboardContent from '../components/minigames/switchboard/SwitchboardContent'
import { loadProgress, saveProgress } from '../types/storage'
import { showAchievement } from '../types/achievements'
const SwitchboardPage = () => {
  const navigate = useNavigate();
  const roomId = 1;


  const handleSuccess = (timeLeft: number) => {
    const progress = loadProgress();
    saveProgress({
      currentPath: '/minigame/finish/1/true',
      completedMinigames: [...(progress?.completedMinigames || []), 'switchboard']
    });
    navigate('/minigame/finish/1/true', { replace: true });

    showAchievement('first_minigame');
  };

  const handleLose = () => {
    navigate(`/minigame/finish/${roomId}/false`);
  };

  return (
    <>
      <SwitchboardContent onWin={handleSuccess} onLose={handleLose} />
      <ScoreCounter style="styled" />
    </>
  )
}

export default SwitchboardPage