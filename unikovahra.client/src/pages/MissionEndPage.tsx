import React from 'react'
import { useRef, useState} from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import ScoreCounter, { type ScoreCounterHandle } from '../components/ui/ScoreCounter';
const MissionEndPage = () => {
  const navigate = useNavigate();
    const scoreRef = useRef<ScoreCounterHandle>(null);
  return (
    <div>
      <h1> Konec mise</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, natus vitae necessitatibus eum nemo corrupti mollitia rem aut modi dolor ipsum reiciendis itaque tempora, provident, dolorum laboriosam sapiente. Laboriosam, nobis.</p>
      <Button text="Hrát znovu" onClick={() => {scoreRef.current?.resetScore(); navigate("/")}} color="blue"></Button>
      <ScoreCounter ref={scoreRef} style={"hidden"} />


    </div>
  )
}

export default MissionEndPage