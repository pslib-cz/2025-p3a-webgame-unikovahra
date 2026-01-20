import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import SlidingPuzzle from '../components/minigames/SlidingPuzzle'

const SlidingPuzzlePage = () => {
  const navigate = useNavigate();
  const roomId = 4;

  return (
    <>
      <SlidingPuzzle 
        onWin={() => navigate(`/minigame/finish/${roomId}/true`)}
        onLose={() => navigate(`/minigame/finish/${roomId}/false`)}
      />
      <ScoreCounter style='styled' />
    </>
  )
}

export default SlidingPuzzlePage