import React, { useEffect, useMemo, useState } from "react";
import styles from "./CodeTypingGame.module.css";

/* 🔐 POLE KÓDŮ */
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
  /* 🎲 náhodný výběr kódu */
  const codeLines = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * CODES.length);
    return CODES[randomIndex].split("\n");
  }, []);

  const [currentLine, setCurrentLine] = useState(0);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  // ⏱️ Timer
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

  // ⌨️ Enter = odeslat řádek
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (input === codeLines[currentLine]) {
      if (currentLine + 1 === codeLines.length) {
        // ✅ dokončeno úspěšně
        setSuccess(true);
        setFinished(true);
        onFinish?.(true);
      } else {
        setCurrentLine((l) => l + 1);
        setInput("");
      }
    } else {
      // ❌ chyba (zatím jen reset inputu)
      setInput("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        ⏳ Čas: {timeLeft}s
      </div>

      <div className={styles.codeBox}>
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
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Přepiš řádek a stiskni Enter"
        />
      )}

      {finished && success !== null && (
        <div className={styles.result}>
          {success ? "✅ Přístup povolen" : "❌ Přístup odepřen"}
        </div>
      )}
    </div>
  );
};

export default CodeTypingGame;
