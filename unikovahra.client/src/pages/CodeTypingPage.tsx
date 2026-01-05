import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import CodeTypingGame from '../components/minigames/codetyping/CodeTypingGame'

const HackingPage = () => {
 const navigate = useNavigate();
  const roomId = 3;
  return (
    <>
<CodeTypingGame timeLimit={60}
></CodeTypingGame>

      <Button
        text="Simulovat úspěch"
        onClick={() => navigate(`/minigame/finish/${roomId}/true`)}
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

export default HackingPage