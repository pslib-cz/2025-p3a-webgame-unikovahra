import { useState } from "react";
import styles from "./SwitchboardContent.module.css";


type Direction = "up" | "right" | "down" | "left";
type CellType = "empty" | "block" | "arrow" | "goal";

interface Cell {
  type: CellType;
  direction?: Direction;
  color?: "green" | "red" | "dark";
}


const initialGrid: Cell[][] = [
  [
    { type: "empty" },
    { type: "arrow", direction: "down", color: "green" },
    { type: "block" },
    { type: "empty" },
    { type: "empty" }
  ],
  [
    { type: "empty" },
    { type: "arrow", direction: "right", color: "green" },
    { type: "arrow", direction: "down", color: "green" },
    { type: "block" },
    { type: "empty" }
  ],
  [
    { type: "empty" },
    { type: "block" },
    { type: "arrow", direction: "left", color: "red" },
    { type: "arrow", direction: "down", color: "dark" },
    { type: "arrow", direction: "down", color: "dark" }
  ],
  [
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "block" },
    { type: "arrow", direction: "left", color: "dark" }
  ],
  [
    { type: "empty" },
    { type: "empty" },
    { type: "block" },
    { type: "empty" },
    { type: "goal" }
  ]
];

const directions: Direction[] = ["up", "right", "down", "left"];


export default function ArrowMinigame() {
  const [grid, setGrid] = useState<Cell[][]>(initialGrid);

  const rotate = (dir: Direction): Direction =>
    directions[(directions.indexOf(dir) + 1) % 4];

  const handleClick = (x: number, y: number) => {
    setGrid(prev =>
      prev.map((row, yy) =>
        row.map((cell, xx) => {
          if (xx === x && yy === y && cell.type === "arrow") {
            return { ...cell, direction: rotate(cell.direction!) };
          }
          return cell;
        })
      )
    );
  };

  return (
    <div className={styles.arrowGame}>
      <div className={styles.grid}>
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`${styles.cell} ${styles[cell.type]}`}
              onClick={() => handleClick(x, y)}
            >
              {cell.type === "arrow" && (
                <div
                  className={`${styles.arrow} ${styles[cell.direction!]} ${
                    styles[cell.color!]
                  }`}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}