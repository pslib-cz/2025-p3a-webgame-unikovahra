import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fetcher } from "../components/Fetcher";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";
import GamebookContent from "../components/minigames/gamebook/GamebookContent";
import { loadProgress } from "../types/storage";

type StoryNodeDto = {
  id: number;
  header: string;
  text: string;
  optionA: string;
  nextA: number | null;
  optionB: string | null;
  nextB: number | null;
  imageUrl?: string | null;
};

const GamebookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const progress = loadProgress();
    const completedMinigames = progress?.completedMinigames || [];
    if (completedMinigames.includes("moneygrab")) {
      navigate(progress?.currentPath || "/rules", { replace: true });
    }
  }, [navigate]);

  const nodeId = Number(id ?? 1);
  return (
    <Fetcher<StoryNodeDto>
      url={`/api/story/${nodeId}`}
      dependencies={[nodeId]}
    >
      {({ data, loading, error }) => (
        <div className="wrap wrap--centered">
          {loading && <Loader />}
          {error && <Error message={error.message} />}

          {data && (
            <GamebookContent
              header={data.header}
              text={data.text}
              imageUrl={data.imageUrl}
              optionA={data.optionA}
              nextA={data.nextA}
              optionB={data.optionB}
              nextB={data.nextB}
              navigate={navigate}
            />
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default GamebookPage;
