import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CodeTypingGame.module.css";
import MusicPlayer from "../../../context/MusicContext";
import { loadProgress, saveProgress } from "../../../types/storage";
import { showAchievement } from "../../../types/achievements";

const CODES: string[] = [
  `#ignore -Camera12<mvm.detect>
#override -Firewall<System>
#stop -Bank<System>.`,

  `#init -SecurityProtocol{alpha}
#scan -Vault<crypto.keys>
#purge -AccessLogs<System>`,

  `#connect -Node[7F:A9]
#bypass -Auth<System>.token
#shutdown -Node[7F:A9]`,

  `#decrypt -Archive<fin.data>
#extract -UserCredentials
#wipe -Trace<System>`
];

type CodeTypingGameProps = {
  timeLimit: number;
  onFinish?: (success: boolean) => void;
};

const CodeTypingGame: React.FC<CodeTypingGameProps> = ({
  timeLimit,
  onFinish,
}) => {
  const navigate = useNavigate();
  const roomId = 3;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    showAchievement('cheater')
  }

  const handlePasteAttempt = (e: React.ClipboardEvent) => {
    e.preventDefault();
    showAchievement('cheater')
  }




  const codeLines = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * CODES.length);
    return CODES[randomIndex].split("\n");
  }, []);

  const [currentLine, setCurrentLine] = useState(0);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const audioSuccess = new Audio("../sfx/correct.mp3");
  const audioFail = new Audio("../sfx/error-modern.mp3");
  const audioWarning = new Audio("../sfx/clock2.mp3");
  useEffect(() => {
    if (finished) return;

    if (timeLeft <= 0) {
      setSuccess(false);
      setFinished(true);
      onFinish?.(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished, onFinish]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (input === codeLines[currentLine]) {
      if (currentLine + 1 === codeLines.length) {
        setSuccess(true);
        setFinished(true);
        onFinish?.(true);
      } else {
        setCurrentLine((l) => l + 1);
        setInput("");
        audioSuccess.play();
      }
    } else {
      setInput("");
      setTimeLeft((t) => Math.max(t - 10, 0));
      audioFail.play();
    }



  };
  if (success) {
    const progress = loadProgress();
    saveProgress({ currentPath: `/minigame/finish/${roomId}/true`, completedMinigames: [...(progress?.completedMinigames || []), 'codetyping'] });
    navigate(`/minigame/finish/${roomId}/true`)
  }
  if (success === false) {
    navigate(`/minigame/finish/${roomId}/false`)
  }

  if (timeLeft === 8) {
    audioWarning.play();
    audioWarning.volume = 0.2;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Čas: {timeLeft}
      </div>

      <div className={styles.codeBox} onContextMenu={handleContextMenu}>
        {codeLines.map((line, index) => (
          <pre
            key={index}
            className={`${styles.codeLine}
              ${index === currentLine ? styles.activeLine : ""}
              ${index < currentLine ? styles.doneLine : ""}`}
          >
            {line}
          </pre>
        ))}
      </div>

      {!finished && (
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "c" || (e.ctrlKey || e.metaKey) && e.key === "v") {

              e.preventDefault();
              showAchievement('cheater')
              return;
            }
            handleKeyDown(e);
          }}
           onPaste={handlePasteAttempt}
          autoFocus
          placeholder="Zadej kód a stiskni Enter"
        />
      )}
    </div>
  );
};

export default CodeTypingGame;
