import { useState } from "react";
import styles from "./SwitchboardContent.module.css";
import Cell from "./Cell";

export type Direction = "up" | "right" | "down" | "left";

export interface CellData {
  type: "empty" | "block" | "arrow" | "goal";
  direction?: Direction;
  correctDirection?: Direction;
  solved?: boolean;
}

const directions: Direction[] = ["up", "right", "down", "left"];

const randomDirection = (): Direction =>
  directions[Math.floor(Math.random() * 4)];

const initialGrid: CellData[][] = [
  [
    { type: "empty" },
    { type: "arrow", direction: "up" },
    { type: "block" },
    { type: "empty" },
    { type: "empty" }
  ],
  [
    { type: "empty" },
    { type: "arrow", direction: "right" },
    { type: "arrow", direction: "down" },
    { type: "block" },
    { type: "empty" }
  ],
  [
    { type: "empty" },
    { type: "block" },
    { type: "arrow", direction: "left" },
    { type: "arrow", direction: "down" },
    { type: "arrow", direction: "down" }
  ],
  [
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "block" },
    { type: "arrow", direction: "down" }
  ],
  [
    { type: "empty" },
    { type: "empty" },
    { type: "block" },
    { type: "empty" },
    { type: "goal" }
  ]
];

export default function SwitchboardContent() {
  const [grid, setGrid] = useState<CellData[][]>(() =>
    initialGrid.map(row =>
      row.map(cell =>
        cell.type === "arrow"
          ? {
              ...cell,
              correctDirection: randomDirection(),
              solved: false
            }
          : cell
      )
    )
  );

  const rotate = (dir: Direction): Direction =>
    directions[(directions.indexOf(dir) + 1) % 4];

  const handleCellClick = (x: number, y: number) => {
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