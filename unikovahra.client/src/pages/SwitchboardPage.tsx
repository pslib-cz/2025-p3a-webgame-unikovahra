import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import { useNavigate } from 'react-router-dom'
import SwitchboardContent from '../components/minigames/switchboard/SwitchboardContent'
const SwitchboardPage = () => {
  const navigate = useNavigate();
  const roomId = 1; 
  return (
    <>
    <SwitchboardContent />
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
      <ScoreCounter style="styled" />
    </>
  )
}

export default SwitchboardPage