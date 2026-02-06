import { useEffect, useState } from 'react'
import styles from './Keylock.module.css'
import MusicPlayer from '../../../context/MusicContext'

type Props = {
  onSuccess: () => void
  onFail: () => void
}

const Rows = 7
const Speed = 350
const Timer = 25

const Keylock: React.FC<Props> = ({ onSuccess, onFail }) => {
  const pin = localStorage.getItem('puzzlePin') ?? '0000'
  const pinDigits = pin.split('').map(Number)

  const [columns, setColumns] = useState<number[][]>(() =>
    Array.from({ length: 4 }, () =>
      Array.from({ length: Rows }, () => Math.floor(Math.random() * 10))
    )
  )

  const [activeCol, setActiveCol] = useState(0)
  const [result, setResult] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [stopped, setStopped] = useState(false)
  const [timeLeft, setTimeLeft] = useState(Timer)

  useEffect(() => {
    if (timeLeft <= 0) {
      onFail()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onFail])

  useEffect(() => {
    if (stopped) return

    const interval = setInterval(() => {
      setColumns(cols =>
        cols.map((col, colIndex) => {
          if (colIndex !== activeCol) return col

          return [
            Math.floor(Math.random() * 10),
            ...col.slice(0, Rows - 1)
          ]
        })
      )
    }, Speed)

    return () => clearInterval(interval)
  }, [stopped, activeCol])

  const handleStop = () => {
    if (stopped) return

    setStopped(true)

    const middleRow = Math.floor(Rows / 2)
    const value = columns[activeCol][middleRow]

    if (value === pinDigits[activeCol]) {
      setResult('correct')

      setTimeout(() => {
        if (activeCol === 3) {
          onSuccess()
        } else {
          setActiveCol(c => c + 1)
          setResult('idle')
          setStopped(false)
        }
      }, 700)
    } else {
      setResult('wrong')
      setTimeout(onFail, 700)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Číselný zámek</div>

      <div
        style={{
          marginBottom: 12,
          fontSize: 20,
          color: timeLeft <= 5 ? '#ff5555' : '#fff',
          fontWeight: 'bold'
        }}
      >
        Čas: {timeLeft}s
      </div>

      <div className={styles.lock}>
        {columns.map((col, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {col.map((num, rowIndex) => {
              const isMiddle = rowIndex === Math.floor(Rows / 2)
              const isActive = colIndex === activeCol && isMiddle
              const isLocked = colIndex < activeCol && isMiddle

              return (
                <div
                  key={rowIndex}
                  className={`${styles.cell}
                    ${isActive ? styles.active : ''}
                    ${isActive && result === 'correct' ? styles.correct : ''}
                    ${isActive && result === 'wrong' ? styles.wrong : ''}
                    ${isLocked ? styles.correct : ''}
                  `}
                >
                  {num}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div className={styles.stop} onClick={handleStop}>
        STOP
      </div>
    </div>
  )
}

export default Keylock
