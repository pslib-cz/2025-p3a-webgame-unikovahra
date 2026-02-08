import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import CodeTypingGame from '../components/minigames/codetyping/CodeTypingGame'

const CodeTypingPage = () => {
  return (
    <div className='wrap wrap--centered wrap--fullycentered'>
      <CodeTypingGame timeLimit={60} />
      <ScoreCounter style={"styled"} />
    </div>
  )
}

export default CodeTypingPage