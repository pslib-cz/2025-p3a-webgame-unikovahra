import React, { useEffect, useState } from 'react'
import { registerToastHandler, unregisterToastHandler, type Achievement } from '../../types/achievements'
import styles from './Toast.module.css'
import Toast from './Toast'


const ToastContainer = () => {
    const [toasts, setToasts] = useState<{id: string, achievement: Achievement}[]>([])
    
    useEffect(() => {
        registerToastHandler((achievement) => {
            const id = `${achievement.id}-${Date.now()}`;
            setToasts((prev) => [...prev, {id, achievement}])
            setTimeout(() => {
                setToasts((prev) => prev.filter(t => t.id !== id))
            }, 8000)
        })
        return () => unregisterToastHandler();
    }, []);
    
    if (toasts.length === 0) return null;

    return (
        <div className={styles.toastContainer}>
            {toasts.map(t => (
                <Toast 
                key={t.id}
                achievement={t.achievement}
                onDismiss={() => setToasts((prev) => prev.filter(toast => toast.id !== t.id))} />
            ))}
        </div>
    )
}

export default ToastContainer