import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Fetcher } from "../components/Fetcher";

type MiniGameDto = {
  id: number;
  roomId: number;
  title: string;
  description: string;
};

const MinigameInitialPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const minigameId = Number(id ?? 1);

  return (
    <Fetcher<MiniGameDto>
      url={`http://localhost:5080/api/minigames/${minigameId}`}
      dependencies={[minigameId]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <p>Načítám minihru...</p>}
          {error && <p>CHYBA: {error.message}</p>}

          {data && (
            <>
              <h2>{data.title}</h2>
              <p>{data.description}</p>

              <Button onClick={() => navigate(`/minigame/play/${data.id}`)} text="Přečíst pravidla hry" color="gold" />
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameInitialPage;
