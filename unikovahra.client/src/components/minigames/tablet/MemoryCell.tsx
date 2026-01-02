import React from 'react'
import styles from './MemoryCell.module.css'

type MemoryCellProps = {
    isLit: boolean;
    disabled: boolean;
    onClick: () => void;
}

const MemoryCell: React.FC<MemoryCellProps> = ({ isLit, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.block} ${isLit ? styles.lit : ''}`}
    />
  )
}

export default MemoryCell