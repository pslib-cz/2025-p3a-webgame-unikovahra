import React from 'react'
import { useRef } from 'react'
import { Fetcher  } from '../components/Fetcher'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import ScoreCounter, {type ScoreCounterHandle} from '../components/ui/ScoreCounter'
type MinigameFinishDto = {
    id: number;
    roomId: number;
    successTitle: string;
    successSubtitle: string;
    successText: string;
    failureTitle: string;
    failureSubtitle: string;
    failureText: string;
};

const MinigameFinishPage = () => {
  const { roomId, success } = useParams<{ roomId: string; success: string }>();
  const navigate = useNavigate();
  const roomIdNum = parseInt(roomId || '1', 10);
  const isSuccess = success === 'true';
  const scoreRef = useRef<ScoreCounterHandle>(null);
  const handleRetry = () => {
    
    scoreRef.current?.deductScore(10000);
    navigate(-1);
  };

  const handleEndMission = () => {
    navigate('/missionend'); 
    
  
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  return (
    <Fetcher<MinigameFinishDto>
      url={`${API_BASE_URL}/api/minigames/${roomIdNum}`}
      dependencies={[roomIdNum]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <p>Načítám data...</p>}
          {error && <p>CHYBA: {error.message}</p>}
          {data && (
            <div>
              <h2 dangerouslySetInnerHTML={{ __html: isSuccess ? data.successTitle : data.failureTitle }} />
              <h3 dangerouslySetInnerHTML={{ __html: isSuccess ? data.successSubtitle : data.failureSubtitle }} />
              <p dangerouslySetInnerHTML={{ __html: isSuccess ? data.successText : data.failureText }} />
              
              <div>
                {isSuccess ? (
                  <Button text="K další minihře" onClick={() => navigate(`/minigame/${roomIdNum+1}`)} color="blue" />
                ) : (
                  <>
                    <Button text="Začít znovu"  onClick={handleRetry} color="blue" />
                    <Button text="Ukončit misi" onClick={handleEndMission} color="white" />
                    <ScoreCounter ref={scoreRef} style={"hidden"} />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </Fetcher>
  )
}

export default MinigameFinishPage