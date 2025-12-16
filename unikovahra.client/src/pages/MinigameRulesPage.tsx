import { useParams, useNavigate } from "react-router-dom";
import { Fetcher } from "../components/Fetcher";
import Button from "../components/ui/Button";
import ImageDisplay from "../components/ui/ImageDisplay";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";

type RoomDto = {
  id: number;
  order: number;
  introTitle: string;
  introSubtitle: string;
  introText: string;
  imageUrl: string;
  introTaskSubtitle: string;
  introTaskText: string;

  header: string;
};

const MinigameRulesPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const id = Number(roomId ?? 1);

  const getMinigamePath = (roomId: number): string => {
    switch (roomId) {
      case 1:
        return '/minigame/switchboard';
      case 2:
        return '/minigame/tablet';
      case 3:
        return '/minigame/hacking';
      case 4:
        return '/minigame/dollar';
      case 5:
        return '/minigame/keylock';
      case 6:
        return '/minigame/moneygrab';
      default:
        return '/minigame/switchboard';
    }
  };
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  return (
    <Fetcher<RoomDto>
      url={`${API_BASE_URL}/api/room/${id}`}
      dependencies={[id]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <Loader/>}
          {error && <Error/>}

          {data && (
            <>

              <ImageDisplay data={{ ...data, header: data.introTitle }} />


              <p>{data.introTitle}</p>
              <p>{data.introSubtitle}</p>
              <p>{data.introText}</p>
              <p>{data.introTaskSubtitle}</p>
              <p>{data.introTaskText}</p>


              <Button onClick={() => navigate(getMinigamePath(data.id))} text="Jdu na to" color="gold" />
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameRulesPage;
