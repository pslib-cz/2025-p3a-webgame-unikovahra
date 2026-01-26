import React from 'react'
import { useRef } from 'react'
import { Fetcher } from '../components/Fetcher'
import { useParams, useNavigate } from 'react-router-dom'
import  { type ScoreCounterHandle } from '../components/ui/ScoreCounter'
import MinigameFinish from '../components/minigames/MinigameFinish'
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
            <div className='wrap wrap--centered wrap--fullycentered'>
              <MinigameFinish data={data} isSuccess={isSuccess} roomIdNum={roomIdNum} navigate={navigate} handleRetry={handleRetry} handleEndMission={handleEndMission} scoreRef={scoreRef} />
            </div>
          )}
        </div>
      )}
    </Fetcher>
  )
}

export default MinigameFinishPage