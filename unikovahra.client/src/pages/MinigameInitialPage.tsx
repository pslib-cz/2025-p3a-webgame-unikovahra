import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";

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

  const [data, setData] = useState<MiniGameDto | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMinigame = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5080/api/minigames/${minigameId}`
        );

        if (!response.ok) {
          throw new Error(`Chyba ${response.status}`);
        }

        const game: MiniGameDto = await response.json();
        setData(game);

      } catch (e) {
        setData(null);

        if (e instanceof Error) setError(e);
        else setError(new Error("Neznámá chyba"));
      } finally {
        setLoading(false);
      }
    };

    fetchMinigame();
  }, [minigameId]);

  return (
    <div>
      {loading && <p>Načítám minihru...</p>}
      {error && <p>CHYBA: {error.message}</p>}

      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          
          <Button onClick={() => navigate(`/minigame/play/${data.id}`)} text="Spustit minihru"  color="gold"/>
        </>
      )}
    </div>
  );
};

export default MinigameInitialPage;
