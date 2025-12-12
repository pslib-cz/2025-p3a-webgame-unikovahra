import React from 'react'
import type { Colors } from '../../types/Colors'
import styles from './Button.module.css'

type ButtonProps = {
  onClick: () => void;
  text: string;
  color?: Colors;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, color }) => {
  return (
    <button 
      className={`${styles.btn}${color ? ` ${styles[color]}` : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button