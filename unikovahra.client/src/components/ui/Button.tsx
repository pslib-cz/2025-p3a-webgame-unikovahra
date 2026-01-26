import React from 'react'
import type { Colors } from '../../types/Colors'
import styles from './Button.module.css'

type ButtonProps = {
  onClick: () => void;
  text: string;
  color?: Colors;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, color, className }) => {
  return (
    <button 
      className={`${styles.btn}${color ? ` ${styles[color]}` : ''}${className ? ` ${styles[className]}` : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button