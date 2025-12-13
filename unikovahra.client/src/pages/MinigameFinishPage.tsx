import React from 'react'
import { Fetcher } from '../components/Fetcher'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

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

  const handleRetry = () => {
    
    
    navigate(-1);
  };

  const handleEndMission = () => {
    navigate('/missionend'); 
  };

  return (
    <Fetcher<MinigameFinishDto[]>
      url={`http://localhost:5080/api/MinigameFinish/room/${roomIdNum}`}
      dependencies={[roomIdNum]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <p>Načítám data...</p>}
          {error && <p>CHYBA: {error.message}</p>}
          {data && data[0] && (
            <div>
              <h2>
                {isSuccess ? data[0].successTitle : data[0].failureTitle}
              </h2>
              <h3>{isSuccess ? data[0].successSubtitle : data[0].failureSubtitle}</h3>
              <p>{isSuccess ? data[0].successText : data[0].failureText}</p>
              
              <div>
                {isSuccess ? (
                  <Button text="K další minihře" onClick={() => navigate(`/minigame/${roomIdNum+1}`)} color="blue" />
                ) : (
                  <>
                    <Button text="Začít znovu"  onClick={handleRetry} color="blue" />
                    <Button text="Ukončit misi" onClick={handleEndMission} color="white" />
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