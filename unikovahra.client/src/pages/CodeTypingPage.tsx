import React from 'react'
import Button from '../components/ui/Button'
import ScoreCounter from '../components/ui/ScoreCounter'
import CodeTypingGame from '../components/minigames/codetyping/CodeTypingGame'

const CodeTypingPage = () => {
  return (
    <>
<CodeTypingGame timeLimit={60} />
      <ScoreCounter style={"styled"} />
    </>
  )
}

export default CodeTypingPage