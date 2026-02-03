import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import SlidingPuzzle from '../components/minigames/slidingPuzzle/SlidingPuzzle'
import { loadProgress, saveProgress } from '../types/storage';
import { showAchievement } from '../types/achievements';

const SlidingPuzzlePage = () => {
  const navigate = useNavigate();
  const roomId = 4;


const handleSuccess = (timeLeft: number) => {
  const progress = loadProgress();
  saveProgress({ currentPath: `/minigame/finish/${roomId}/true`, completedMinigames: [...(progress?.completedMinigames || []), 'puzzle'] });

  if (timeLeft > 45) {
    showAchievement('speedrunner');
  }

  navigate(`/minigame/finish/${roomId}/true`);
}

return (
  <>
    <SlidingPuzzle
      onWin={handleSuccess}
      onLose={() => navigate(`/minigame/finish/${roomId}/false`)}
    />
    <ScoreCounter style='styled' />
  </>
)
}
export default SlidingPuzzlePage