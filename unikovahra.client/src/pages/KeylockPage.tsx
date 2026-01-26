import React, { useState } from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'

const KeylockPage = () => {
  const navigate = useNavigate();
  const roomId = 5;
  const [savedPin, setSavedPin] = useState<string | null>(() => localStorage.getItem('puzzlePin'));

  return (
    <>
      {savedPin && (
        <div>
          PIN z puzzle: {savedPin}
        </div>
      )}
      <Button
        text="Simulovat úspěchh"
        onClick={() => navigate(`/finish`)}
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