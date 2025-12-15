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
      <p>Rozhodl ses misi ukončit. Tvoje cesta zde končí a další postup už není možný. V tuto chvíli už nic nemůžeš změnit, tvůj příběh je uzavřen. Jedinou možností je začít celou hru znovu a pokusit se o úspěch od začátku.</p>
      <Button text="Hrát znovu" onClick={() => {scoreRef.current?.resetScore(); navigate("/")}} color="blue"></Button>
      <ScoreCounter ref={scoreRef} style={"hidden"} />


    </div>
  )
}

export default MissionEndPage