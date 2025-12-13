import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Fetcher } from "../components/Fetcher";

type StoryNodeDto = {
  id: number;
  header: string;
  text: string;
  optionA: string | null;
  nextA: number | null;
  optionB: string | null;
  nextB: number | null;
  imageUrl?: string | null;o
};

const GamebookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const nodeId = Number(id ?? 1);

  return (
    <Fetcher<StoryNodeDto>
      url={`http://localhost:5080/api/story/${nodeId}`}
      dependencies={[nodeId]}
    >
      {({ data, loading, error }) => (
        <div>
          {loading && <p>Načítám data...</p>}
          {error && <p>CHYBA: {error.message}</p>}

          {data && (
            <>
              {data.imageUrl && (
                <img 
                  src={`http://localhost:5080${data.imageUrl}`} 
                  alt={data.header} 
                  style={{ maxWidth: '100%', marginBottom: '1rem' }} 
                />
              )}
              
              <h2>{data.header}</h2>
              <p>{data.text}</p>

              <div>
                {data.optionA && data.nextA != null && (
                  <Button color="blue" onClick={() => navigate(`/gamebook/${data.nextA}`)} text={data.optionA} />
                )}

                {data.optionB && data.nextB != null && (
                  <Button color="white" onClick={() => navigate(`/gamebook/${data.nextB}`)} text={data.optionB} />
                )}

                {data.nextA == null && data.nextB == null && (
                  <Button color="blue" onClick={() => navigate('/minigame/moneygrab')} text="Pokračovat" />
                )}
              </div>
            </>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default GamebookPage;
