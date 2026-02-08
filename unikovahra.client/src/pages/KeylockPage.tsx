import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScoreCounter from '../components/ui/ScoreCounter'
import { loadProgress, saveProgress } from '../types/storage'
import Keylock from '../components/minigames/keylock/Keylock'
import { showAchievement } from '../types/achievements'

const KeylockPage = () => {
  const navigate = useNavigate()
  const roomId = 5

  const [savedPin] = useState<string | null>(() =>
    localStorage.getItem('puzzlePin')
  )

  const handleSuccess = (timeLeft: number) => {
    const progress = loadProgress()
    saveProgress({
      currentPath: '/minigame/finish/5/true',
      completedMinigames: [...(progress?.completedMinigames || []), 'keylock']
    })

    if (timeLeft > 17) {
      showAchievement('speedrunner')
    }

    navigate('/minigame/finish/5/true', { replace: true })
  }

  const handleFail = () => {
    navigate(`/minigame/finish/${roomId}/false`, { replace: true })
  }

  if (!savedPin) {
    return <div>Chybí PIN z předchozí minihry</div>
  }

  return (
    <>
      <Keylock
        onSuccess={handleSuccess}
        onFail={handleFail}
      />
      <ScoreCounter style="styled" />
    </>
  )
}

export default KeylockPage
