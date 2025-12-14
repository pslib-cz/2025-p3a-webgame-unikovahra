import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'

const DollarPage = () => {
  const navigate = useNavigate();
  const roomId = 4;
  return (
    <>
      <Button
        text="Simulovat úspěchh"
        onClick={() => navigate(`/minigame/finish/${roomId}/true`)}
        color="blue"
      />
      <Button
        text="Simulovat neúspěch"
        onClick={() => navigate(`/minigame/finish/${roomId}/false`)}
        color="white"
      />
      <ScoreCounter style='styled' />
    </>
  )
}

export default DollarPage