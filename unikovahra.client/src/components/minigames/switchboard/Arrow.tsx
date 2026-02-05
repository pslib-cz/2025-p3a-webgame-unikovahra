import styles from "./SwitchboardContent.module.css";
import { type CellData } from "./SwitchboardContent";

interface Props {
  cell: CellData;
}

export default function Arrow({ cell }: Props) {
  if (!cell.direction) return null;

  const borderColor = cell.solved ? "#3cff87" : "#2c2f36";

  return (
    <div 
      className={styles[cell.direction]}
      style={{
        width: 0,
        height: 0,
        borderLeft: "12px solid transparent",
        borderRight: "12px solid transparent",
        borderBottom: `20px solid ${borderColor}`,
        filter: cell.solved ? "drop-shadow(0 0 6px rgba(60, 255, 135, 0.7))" : "none",
        transition: "border-bottom-color 0.15s ease, filter 0.15s ease",
      }}
    />
  );
}
