import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Fetcher } from "../components/Fetcher";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";

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
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  return (
    <Fetcher<MiniGameDto>
      url={`${API_BASE_URL}/api/minigames/${minigameId}`}
      dependencies={[minigameId]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <Loader/>}
          {error && <Error/>}

          {data && (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
              <p dangerouslySetInnerHTML={{ __html: data.description }} />

              <Button onClick={() => navigate(`/minigame/play/${data.id}`)} text="Přečíst pravidla hry" color="gold" />
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameInitialPage;
