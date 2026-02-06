import React from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router'
import RulesDisplay from '../components/rules/RulesDisplay'

const RulesPage = () => {
  const navigate = useNavigate()
  return (
    <div className='wrap wrap--centered wrap--mobile'>


      <RulesDisplay />
      <Button color="gold" onClick={() => navigate('/minigame/1')} text="Začít hrát" className="centered" />
    </div>

  )
}

export default RulesPage