import { useState, useEffect } from "react";
import styles from "./SwitchboardContent.module.css";
import Cell from "./Cell";

export type Direction = "up" | "right" | "down" | "left";

export interface CellData {
  type: "empty" | "block" | "arrow" | "goal";
  direction?: Direction;
  correctDirection?: Direction;
  solved?: boolean;
}

type SwitchboardProps = {
  onWin: (timeLeft: number) => void;
  onLose: () => void;
};

const directions: Direction[] = ["up", "right", "down", "left"];

const randomDirection = (): Direction =>
  directions[Math.floor(Math.random() * 4)];

const gridTemplates: CellData[][][] = [
  // Grid 1
  [
    [
      { type: "empty" },
      { type: "arrow", direction: "up", correctDirection: "down" },
      { type: "block" },
      { type: "empty" },
      { type: "empty" }
    ],
    [
      { type: "empty" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "up", correctDirection: "down" },
      { type: "block" },
      { type: "empty" }
    ],
    [
      { type: "empty" },
      { type: "block" },
      { type: "arrow", direction:"down", correctDirection: "right" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "up", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "empty" },
      { type: "block" },
      { type: "arrow", direction: "down", correctDirection:"down" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "block" },
      { type: "empty" },
      { type: "goal" }
    ]
  ],
  // Grid 2
  [
    [
      { type: "empty" },
      { type: "arrow",},
      { type: "block" },
      { type: "arrow", direction: "up", correctDirection: "down" },
      { type: "empty" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "arrow", direction: "up", correctDirection: "down" },
      { type: "empty" },
      { type: "empty" }
    ],
    [
      { type: "empty" },
      { type: "block" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "up", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "arrow", direction: "up", correctDirection: "down" },
      { type: "empty" },
      { type: "empty" },
      { type: "arrow", direction: "down", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "empty" },
      { type: "empty" },
      { type: "goal" }
    ]
  ],
  // Grid 3
  [
    [
      { type: "arrow",},
      { type: "empty" },
      { type: "block" },
      { type: "empty" },
      { type: "arrow", direction: "right", correctDirection: "down" }
    ],
    [
      { type: "arrow", },
      { type: "block",},
      { type: "arrow",  },
      { type: "arrow", direction: "right", correctDirection: "down" },
      { type: "arrow", direction: "left", correctDirection: "left" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "left", correctDirection: "down" },
      { type: "block" }
    ],
    [
      { type: "block" },
      { type: "empty" },
      { type: "block" },
      { type: "arrow", direction: "up", correctDirection: "right" },
      { type: "arrow", direction: "down", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "goal" },
      { type: "arrow", direction: "right", correctDirection: "left" },
      { type: "arrow", direction: "up", correctDirection: "left" }
    ]
  ],
  // Grid 4
  [
    [
      { type: "empty" },
      { type: "arrow", direction: "left", correctDirection: "down" },
      { type: "block" },
      { type: "arrow",},
      { type: "empty" }
    ],
    [
      { type: "block" },
      { type: "arrow", correctDirection: "right" },
      { type: "arrow", correctDirection: "down" },
      { type: "block" },
      { type: "block" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "arrow", direction: "down", correctDirection: "right" },
      { type: "arrow", direction: "left", correctDirection: "right" },
      { type: "arrow", direction: "right", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "block" },
      { type: "block" },
      { type: "block" },
      { type: "arrow", direction: "left", correctDirection: "down" }
    ],
    [
      { type: "empty" },
      { type: "block" },
      { type: "goal" },
      { type: "arrow", direction: "right", correctDirection: "left" },
      { type: "arrow", direction: "up", correctDirection: "left" }
    ]
  ],
  // Grid 5
  [
    [
      { type: "block", },
      { type: "empty" },
      { type: "empty" },
      { type: "arrow", direction: "down", correctDirection: "down" },
      { type: "empty" }
    ],
    [
      { type: "goal" },
      { type: "arrow", direction: "up", correctDirection: "left" },
      { type: "arrow", direction: "left", correctDirection: "left" },
      { type: "arrow" },
      { type: "block" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "block" },
      { type: "arrow", },
      { type: "arrow",  }
    ],
    [
      { type: "block" },
      { type: "arrow", },
      { type: "empty" },
      { type: "block" },
      { type: "empty" }
    ],
    [
      { type: "empty" },
      { type: "empty" },
      { type: "empty" },
      { type: "empty" },
      { type: "empty" }
    ]
  ]
];

const getRandomGrid = (): CellData[][] => {
  const template = gridTemplates[Math.floor(Math.random() * gridTemplates.length)];
  return template.map(row =>
    row.map(cell =>
      cell.type === "arrow"
        ? {
            ...cell,
            direction: randomDirection(),
            solved: false
          }
        : cell
    )
  );
};

export default function SwitchboardContent({ onWin, onLose }: SwitchboardProps) {
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<CellData[][]>(getRandomGrid());
  const [timeLeft, setTimeLeft] = useState(1000);
  const [gameSolved, setGameSolved] = useState(false);

  // Check if all arrows are solved
  const isGameComplete = grid.every(row =>
    row.every(cell =>
      cell.type !== "arrow" || cell.solved
    )
  );

  // Timer effect
  useEffect(() => {
    if (gameSolved || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameSolved]);

  // Check game completion
  useEffect(() => {
    if (isGameComplete && !gameSolved) {
      setGameSolved(true);
      setTimeout(() => {
        if (level === 3) {
          localStorage.setItem('switchboardResult', 'solved');
          onWin(timeLeft);
        } else {
          // Move to next level
          setLevel(prev => prev + 1);
          setGrid(getRandomGrid());
          setTimeLeft(1000);
          setGameSolved(false);
        }
      }, 500);
    }
  }, [isGameComplete, gameSolved, timeLeft, level, onWin]);

  // Check game loss
  useEffect(() => {
    if (timeLeft <= 0 && !gameSolved) {
      onLose();
    }
  }, [timeLeft, gameSolved, onLose]);

  const rotate = (dir: Direction): Direction =>
    directions[(directions.indexOf(dir) + 1) % 4];

  const handleCellClick = (x: number, y: number) => {
    if (gameSolved || timeLeft <= 0) return;

    setGrid(prev =>
      prev.map((row, yy) =>
        row.map((cell, xx) => {
          if (xx === x && yy === y && cell.type === "arrow") {
            const newDir = rotate(cell.direction!);
            return {
              ...cell,
              direction: newDir,
              solved: newDir === cell.correctDirection
            };
          }
          return cell;
        })
      )
    );
  };

  return (
    <div className={styles.switchboard}>
      <div className={styles.levelInfo}>
        <div className={styles.levelText}>Level: {level}/3</div>
        <div className={`${styles.timeDisplay} ${timeLeft <= 5 ? styles.timeCritical : styles.timeNormal}`}>
          Time: {timeLeft}s
        </div>
      </div>

      <div className={styles.grid}>
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <Cell
              key={`${x}-${y}`}
              cell={cell}
              onClick={() => handleCellClick(x, y)}
            />
          ))
        )}
      </div>
    </div>
  );
}