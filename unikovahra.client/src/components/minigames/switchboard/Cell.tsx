import styles from "./SwitchboardContent.module.css";
import Arrow from "./Arrow";
import { type CellData } from "./SwitchboardContent";

interface Props {
  cell: CellData;
  onClick: () => void;
}

export default function Cell({ cell, onClick }: Props) {
  return (
    <div
      className={[
        styles.cell,
        styles[cell.type],
        cell.solved ? styles.solved : ""
      ].join(" ")}
      onClick={cell.type === "arrow" ? onClick : undefined}
    >
      {cell.type === "arrow" && <Arrow cell={cell} />}
    </div>
  );
}
