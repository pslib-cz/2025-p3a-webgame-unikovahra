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
  return (
    <Fetcher<MiniGameDto>
      url={`/api/minigames/${minigameId}`}
      dependencies={[minigameId]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <Loader />}
          {error && <Error message={error.message} />}

          {data && (
            <div className="wrap wrap--fullycentered wrap--centered">
              <p className="initial__text" dangerouslySetInnerHTML={{ __html: data.description }} />
              <h2 className="initial__title" dangerouslySetInnerHTML={{ __html: data.title }} />


              <Button onClick={() => navigate(`/minigame/play/${data.id}`)} text="Přečíst pravidla hry" color="gold" />
            </div>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameInitialPage;
