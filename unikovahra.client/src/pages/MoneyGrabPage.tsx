import React from 'react'
import { useNavigate } from 'react-router-dom'

const MoneyGrabPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      Seber co nejvíc bankovek!
            <button onClick={() => navigate(`/minigame/`)}>
            Dočasný text - splnění minihry
          </button>
    </div>
  )
}

export default MoneyGrabPage