import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Fetcher } from "../components/Fetcher";
import Choices from "../components/ui/Choices";
import ImageDisplay from "../components/ui/ImageDisplay";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";

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
        <div>
          {loading && <Loader />}
          {error && <Error />}

          {data && (
            <>
              <ImageDisplay data={data} />

              <h2>{data.header}</h2>
              <p>{data.text}</p>

              <Choices data={data} navigate={navigate} />
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default GamebookPage;
