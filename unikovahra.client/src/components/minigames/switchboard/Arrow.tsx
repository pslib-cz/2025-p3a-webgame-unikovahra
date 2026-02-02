import styles from "./SwitchboardContent.module.css";
import { type CellData } from "./SwitchboardContent";

interface Props {
  cell: CellData;
}

export default function Arrow({ cell }: Props) {
  return (
    <div
      className={`${styles.arrow} ${styles[cell.direction!]} ${
        cell.solved ? styles.green : styles.dark
      }`}
    />
  );
}