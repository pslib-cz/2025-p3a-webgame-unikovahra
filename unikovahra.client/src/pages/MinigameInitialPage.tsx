import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Fetcher } from "../components/Fetcher";
import Loader from "../components/ui/Loader";
import { Error } from "../components/ui/Error";
import { showAchievement } from "../types/achievements";
import { useRef } from "react";
import styles from "./MinigameInitialPage.module.css";

type MiniGameDto = {
  id: number;
  roomId: number;
  title: string;
  description: string;
};

const MinigameInitialPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const easterEggUsed = useRef(false);

  const minigameId = Number(id ?? 1);
  
  const handleEasterEgg = () => {
    if (easterEggUsed.current) return;
    easterEggUsed.current = true;
    
    const currentScore = parseInt(localStorage.getItem('playerScore') || '0');
    const newScore = currentScore + 50000;
    localStorage.setItem('playerScore', newScore.toString());
    
    showAchievement('easter_egg');
  };
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
            <div className={`wrap wrap--fullycentered wrap--centered ${styles.container}`}>
              <p className="initial__text" dangerouslySetInnerHTML={{ __html: data.description }} />
              <h2 className="initial__title" dangerouslySetInnerHTML={{ __html: data.title }} />

              {minigameId === 2 && (
                <button
                  onClick={handleEasterEgg}
                  className={styles.easterEgg}
                  aria-label="Easter egg"
                />
              )}

              <Button onClick={() => navigate(`/minigame/play/${data.id}`)} text="Přečíst pravidla hry" color="gold" />
            </div>
          )}
        </div>
      )}
    </Fetcher>
  );
};

export default MinigameInitialPage;
