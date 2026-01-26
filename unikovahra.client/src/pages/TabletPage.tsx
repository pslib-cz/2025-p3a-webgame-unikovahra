import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MemoryGrid from '../components/minigames/tablet/MemoryGrid'
import ScoreCounter from '../components/ui/ScoreCounter';
import { loadProgress, saveProgress } from '../types/storage';


const TabletPage = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(1);




  const levels = [
    { size: 3, sequenceLength: 4 },
    { size: 4, sequenceLength: 5 },
    { size: 5, sequenceLength: 5 }
  ];

  const handleSuccess = () => {
    if (level < 3) {
      setLevel(level + 1);
    } else {
      const progress = loadProgress();
      saveProgress({ currentPath: '/minigame/finish/2/true', completedMinigames: [...(progress?.completedMinigames || []), 'tablet'] });

      navigate('/minigame/finish/2/true');
    }
  };

  return (
    <div > <ScoreCounter style="styled" />
      <div className='wrap wrap--centered wrap--fullycentered'>

        <MemoryGrid
          key={level}
          size={levels[level - 1].size}
          sequenceLength={levels[level - 1].sequenceLength}
          onSuccess={handleSuccess}
          onFailure={() => navigate('/minigame/finish/2/false')}
        />
      </div>
    </div >
  )
}

export default TabletPage