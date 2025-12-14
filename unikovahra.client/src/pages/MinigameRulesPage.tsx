import { useParams, useNavigate } from "react-router-dom";
import { Fetcher } from "../components/Fetcher";
import Button from "../components/ui/Button";

type RoomDto = {
  id: number;
  order: number;
  introTitle: string;
  introSubtitle: string;
  introText: string;
  imageUrl: string;
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

  return (
    <Fetcher<RoomDto>
      url={`http://localhost:5080/api/room/${id}`}
      dependencies={[id]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <p>Načítám pravidla…</p>}
          {error && <p>CHYBA: {error.message}</p>}

          {data && (
            <>
              {data.imageUrl && (
                <img
                  src={`http://localhost:5080${data.imageUrl}`}
                  alt={data.introTitle}
                  style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
              )}
              <h2>{data.introTitle}</h2>
              <h4>{data.introSubtitle}</h4>
              <p>{data.introText}</p>

              <Button onClick={() => navigate(getMinigamePath(data.id))} text="Jdu na to" color="gold" />
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameRulesPage;
