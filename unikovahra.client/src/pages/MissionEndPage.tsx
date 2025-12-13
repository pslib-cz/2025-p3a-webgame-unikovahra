import React from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const MissionEndPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Konec mise</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, natus vitae necessitatibus eum nemo corrupti mollitia rem aut modi dolor ipsum reiciendis itaque tempora, provident, dolorum laboriosam sapiente. Laboriosam, nobis.</p>
      <Button text="Hrát znovu" onClick={() => navigate('/')} color="blue"></Button>


    </div>
  )
}

export default MissionEndPage