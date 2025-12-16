import React from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router'
import RulesDisplay from '../components/rules/RulesDisplay'

const RulesPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      

      <RulesDisplay /> 
      <Button color="gold" onClick={() => navigate('/minigame/1')} text="Jdu se dostat ven" />
    </div>

  )
}

export default RulesPage