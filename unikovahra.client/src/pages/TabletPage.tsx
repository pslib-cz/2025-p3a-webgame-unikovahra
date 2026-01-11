import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MemoryGrid from '../components/minigames/tablet/MemoryGrid'
import ScoreCounter from '../components/ui/ScoreCounter';


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
      navigate('/minigame/finish/2/true');
    }
  };

  return (
    <div className='wrap wrap--centered wrap--fullycentered'>
      <ScoreCounter style="styled" />
      <MemoryGrid
        key={level}
        size={levels[level - 1].size}
        sequenceLength={levels[level - 1].sequenceLength}
        onSuccess={handleSuccess}
        onFailure={() => navigate('/minigame/finish/2/false')}
      />
    </div>
  )
}

export default TabletPage