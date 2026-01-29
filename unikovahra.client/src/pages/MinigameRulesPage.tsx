import { useParams, useNavigate } from "react-router-dom";
import { Fetcher } from "../components/Fetcher";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";
import MinigameRules from "../components/minigames/MinigameRules";
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
        return '/minigame/codetyping';
      case 4:
        return '/minigame/puzzle';
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
        <div className="wrap wrap--centered">
          {loading && <Loader />}
          {error && <Error message={error.message} />}

          {data && (
            <MinigameRules
              introTitle={data.introTitle}
              introSubtitle={data.introSubtitle}
              introText={data.introText}
              introTaskSubtitle={data.introTaskSubtitle}
              introTaskText={data.introTaskText}
              imageUrl={data.imageUrl}
              onStart={() => navigate(getMinigamePath(data.id))}
            />
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameRulesPage;