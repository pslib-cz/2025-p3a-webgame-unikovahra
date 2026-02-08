import React from 'react'
import type { Achievement } from '../../types/achievements'
import styles from './Toast.module.css'

type ToastProps = {
    achievement: Achievement;
    onDismiss: () => void;
}
const Toast: React.FC<ToastProps> = ({ achievement, onDismiss }) => {
  return (
    <div className={styles.toast} onClick={onDismiss}>
        <div className={styles.icon}>{achievement.icon}</div>
        <div className={styles.content}>
            <div className={styles.title}>{achievement.name}</div>
            <div className={styles.description}>{achievement.description}</div>
        </div>
        




    </div>
  )
}

export default Toast