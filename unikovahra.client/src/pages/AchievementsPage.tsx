import React from 'react'
import { useNavigate } from 'react-router-dom'
import { achievements, type AchievementId } from '../types/achievements'
import Button from '../components/ui/Button'
import styles from './AchievementsPage.module.css'

const AchievementsPage = () => {
  const navigate = useNavigate()
  const allAchievements = Object.values(achievements)
  
  const saved = localStorage.getItem('unlockedAchievements')
  const unlockedIds: AchievementId[] = saved ? JSON.parse(saved) : []

  return (
    <div className='wrap wrap--centered'>
      <h1 className={styles.title}>Achievementy</h1>
      <p className={styles.stats}>
        Odemčeno: {unlockedIds.length} / {allAchievements.length}
      </p>
      <div className={styles.grid}>
        {allAchievements.map((achievement) => {
          const isUnlocked = unlockedIds.includes(achievement.id)
          return (
            <div
              key={achievement.id}
              className={`${styles.card} ${isUnlocked ? styles.unlocked : styles.locked}`}
            >
              <div className={styles.icon}>{isUnlocked ? achievement.icon : '🔒'}</div>
              <div className={styles.content}>
                <h3 className={styles.name}>{achievement.name}</h3>
                <p className={styles.description}>
                  {achievement.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button text="Zpět" onClick={() => navigate(-1)} color="gold" />
      </div>
    </div>
  )
}

export default AchievementsPage
