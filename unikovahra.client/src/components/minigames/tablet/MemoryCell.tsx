import React, { useEffect } from 'react'
import styles from './MemoryCell.module.css'
import { useState } from 'react'

type MemoryCellProps = {
    isLit: boolean;
    disabled: boolean;
    onClick: () => void;
}

const MemoryCell: React.FC<MemoryCellProps> = ({ isLit, disabled, onClick }) => {
const [isActive, setIsActive] = useState(false);

const handleInternalClick = () => {
    if (disabled) return;

    setIsActive(true); 
    onClick();

    setTimeout(() => {
      setIsActive(false);
    }, 350);
  };

  return (
    <button
      onClick={() => {
        handleInternalClick();
      }}
      disabled={disabled}
      className={`${styles.block} ${isLit ? styles.lit : ''} ${isActive ? styles.active : ''}`}

    />
  )
}

export default MemoryCell