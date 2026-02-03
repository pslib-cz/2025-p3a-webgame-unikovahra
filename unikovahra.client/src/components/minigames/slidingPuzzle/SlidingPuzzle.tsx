import React, { useState, useEffect } from 'react';
import styles from './SlidingPuzzle.module.css';
import Button from '../../ui/Button';

type TileValue = number | null;
type Board = TileValue[][];

const SIZE = 3;

type SlidingPuzzleProps = {
  onWin: (timeLeft: number) => void;
  onLose: () => void;
};


const SlidingPuzzle: React.FC<SlidingPuzzleProps> = ({ onWin, onLose }) => {
  
  const findEmpty = (currentBoard: Board) => {
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (currentBoard[r][c] === null) return { r, c };
      }
    }
    return { r: SIZE - 1, c: SIZE - 1 };
  };

  const isWinner = (currentBoard: Board) => {
    let expectedValue = 1;
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (r === SIZE - 1 && c === SIZE - 1) {
          return currentBoard[r][c] === null;
        }
        if (currentBoard[r][c] !== expectedValue) {
          return false;
        }
        expectedValue++;
      }
    }
    return true;
  };

  const [timeLeft, setTimeLeft] = useState(90);
  const [pin, setPin] = useState(() => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  });
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const showPin = timeLeft <= 0 || puzzleSolved;

  const [board, setBoard] = useState<Board>(() => {
    const newBoard: Board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, null]
    ];

    for (let i = 0; i < 150; i++) {
      const empty = findEmpty(newBoard);
      const neighbors = [];
      if (empty.r > 0) neighbors.push({ r: empty.r - 1, c: empty.c });
      if (empty.r < SIZE - 1) neighbors.push({ r: empty.r + 1, c: empty.c });
      if (empty.c > 0) neighbors.push({ r: empty.r, c: empty.c - 1 });
      if (empty.c < SIZE - 1) neighbors.push({ r: empty.r, c: empty.c + 1 });

      const move = neighbors[Math.floor(Math.random() * neighbors.length)];
      newBoard[empty.r][empty.c] = newBoard[move.r][move.c];
      newBoard[move.r][move.c] = null;
    }
    return newBoard;
  });

  useEffect(() => {
    if (puzzleSolved || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, puzzleSolved]);

  const handleTileClick = (row: number, col: number) => {
    const empty = findEmpty(board);

    const distance = Math.abs(row - empty.r) + Math.abs(col - empty.c);

    if (distance === 1) {
      const newBoard = board.map(r => [...r]);
      
      newBoard[empty.r][empty.c] = board[row][col];
      newBoard[row][col] = null;
      
      setBoard(newBoard);

      if (isWinner(newBoard)) {
        setTimeout(() => setPuzzleSolved(true), 200);
      }
    }
  };

  if (showPin) {
    localStorage.setItem('puzzlePin', pin);
    if (timeLeft <= 0 && !puzzleSolved) {
      onLose();
      return null;
    }
    return (
      <div className={styles.puzzleContainer}>
        <div className={styles.pinDisplay}>
          <h2 className={`marked ${styles.title}`}>Výborně!</h2>
          <p className={styles.description}>Zapamatuj si tento PIN:</p>
          <div className={styles.pinCode}>{pin}</div>
          <Button onClick={() => onWin(timeLeft)} text={'Pokračovat'} color='blue' className='centered' />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.puzzleContainer}>
      <div 
        className={styles.timer}
        style={{ '--timer-width': `${(timeLeft / 90) * 100}%` } as React.CSSProperties}
        data-time={timeLeft}
      />
      <div className={styles.puzzleGrid}>
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={tile === null ? styles.emptyTile : styles.tile}
              onClick={() => handleTileClick(rowIndex, colIndex)}
            >
              {tile}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SlidingPuzzle;