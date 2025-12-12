import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";

type StoryNodeDto = {
  id: number;
  header: string;
  text: string;
  optionA: string | null;
  nextA: number | null;
  optionB: string | null;
  nextB: number | null;
  imageUrl?: string | null;
};

const GamebookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const nodeId = Number(id ?? 1);

  const [data, setData] = useState<StoryNodeDto | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNode = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5080/api/story/${nodeId}`);

        if (!response.ok) {
          throw new Error(`Chyba ${response.status}`);
        }

        const node: StoryNodeDto = await response.json();
        setData(node);

      } catch (e) {

        setData(null);

        if (e instanceof Error) setError(e);
        else setError(new Error("Neznámá chyba"));
      } finally {
        setLoading(false);
      }
    };

    fetchNode();
  }, [nodeId]);

  return (
    <div>
      {loading && <p>Načítám data...</p>}
      {error && <p>CHYBA: {error.message}</p>}

      {data && (
        <>
          <h2>{data.header}</h2>
          <p>{data.text}</p>

          <div >
            {data.optionA && data.nextA != null && (
             

              <Button color="blue" onClick={() => navigate(`/gamebook/${data.nextA}`)} text={data.optionA} />
            )}

            {data.optionB && data.nextB != null && (
            
              <Button color="white" onClick={() => navigate(`/gamebook/${data.nextB}`)} text={data.optionB} />
            )}

            {data.nextA == null && data.nextB == null && (
              <button onClick={() => navigate('/minigame')}>
                {data.optionA || 'Pokračovat'}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GamebookPage;
