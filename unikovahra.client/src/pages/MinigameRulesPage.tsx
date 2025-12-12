import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

  const [data, setData] = useState<RoomDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5080/api/room/${id}`
        );

        if (!response.ok) {
          throw new Error(`Chyba ${response.status}`);
        }

        const room: RoomDto = await response.json();
        setData(room);

      } catch (e) {
        setData(null);

        if (e instanceof Error) setError(e);
        else setError(new Error("Neznámá chyba"));
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const getMinigamePath = (roomId: number): string => {
    switch (roomId) {
      case 1:
        return '/minigame/switchboard';
      case 2:
        return '/minigame/tablet';
      case 3:
        return '/minigame/hacking';
      case 4:
        return '/minigame/keylock';
      case 5:
        return '/minigame/dollar';
      case 6:
        return '/minigame/moneygrab';
      default:
        return '/minigame/switchboard';
    }
  };

  return (
    <div>
      {loading && <p>Načítám pravidla…</p>}
      {error && <p>CHYBA: {error.message}</p>}

      {data && (
        <>
          <h2>{data.introTitle}</h2>
          <h4>{data.introSubtitle}</h4>
          <p>{data.introText}</p>

          <button onClick={() => navigate(getMinigamePath(data.id))}>
            Pokračovat do minihry
          </button>
        </>
      )}
    </div>
  );
};

export default MinigameRulesPage;
