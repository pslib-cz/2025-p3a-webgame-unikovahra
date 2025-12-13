import React from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router'

const RulesPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Pravidla Hry</h1>
      <Button color="gray" onClick={() => navigate('/minigame/switchboard')} text="Jdu se dostat ven" />
    </div>

  )
}

export default RulesPage