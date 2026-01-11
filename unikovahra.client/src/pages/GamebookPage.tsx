import { useNavigate, useParams } from "react-router-dom";
import { Fetcher } from "../components/Fetcher";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";
import GamebookContent from "../components/minigames/gamebook/GamebookContent";

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

  const nodeId = Number(id ?? 1);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  return (
    <Fetcher<StoryNodeDto>
      url={`${API_BASE_URL}/api/story/${nodeId}`}
      dependencies={[nodeId]}
    >
      {({ data, loading, error }) => (
        <div className="wrap wrap--centered">
          {loading && <Loader />}
          {error && <Error />}

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
