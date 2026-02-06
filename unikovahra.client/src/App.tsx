import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import StartPage from "./pages/StartPage";

import GamebookPage from "./pages/GamebookPage";
import SwitchboardPage from "./pages/SwitchboardPage";
import TabletPage from "./pages/TabletPage";
import CodeTypingPage from "./pages/CodeTypingPage";
import KeylockPage from "./pages/KeylockPage";
import SlidingPuzzlePage from "./pages/SlidingPuzzlePage";
import MoneyGrabPage from "./pages/MoneyGrabPage";
import FinishPage from "./pages/FinishPage";
import AchievementsPage from "./pages/AchievementsPage";
import NotFoundPage from "./pages/NotFoundPage";

import MinigameInitialPage from "./pages/MinigameInitialPage";
import MinigameRulesPage from "./pages/MinigameRulesPage";
import RulesPage from "./pages/RulesPage";
import MinigameFinishPage from "./pages/MinigameFinishPage";
import MissionEndPage from "./pages/MissionEndPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadProgress } from "./types/storage";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedProgress = loadProgress();
  //   if (savedProgress?.currentPath) {
  //     navigate(savedProgress.currentPath);
  //   }
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 500);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<StartPage />} />

        <Route path="gamebook/:id?" element={<GamebookPage />} />

        <Route path="minigame/moneygrab" element={
          <ProtectedRoute requiredMinigames={['gamebook']} currentMinigame="moneygrab">
            <MoneyGrabPage />
          </ProtectedRoute>
        } />

        <Route path="rules" element={<RulesPage />} />
        <Route path="minigame/switchboard" element={
          <ProtectedRoute requiredMinigames={['gamebook', 'moneygrab']} currentMinigame="switchboard">
            <SwitchboardPage />
          </ProtectedRoute>
        } />

        <Route path="minigame/tablet" element={
          <ProtectedRoute requiredMinigames={['gamebook', 'moneygrab', 'switchboard']} currentMinigame="tablet">
            <TabletPage />
          </ProtectedRoute>
        } />

        <Route path="minigame/codetyping" element={
          <ProtectedRoute requiredMinigames={['gamebook', 'moneygrab', 'switchboard', 'tablet']} currentMinigame="codetyping">
            <CodeTypingPage />
          </ProtectedRoute>
        } />

        <Route path="minigame/puzzle" element={
          <ProtectedRoute requiredMinigames={['gamebook', 'moneygrab', 'switchboard', 'tablet', 'codetyping']} currentMinigame="puzzle">
            <SlidingPuzzlePage />
          </ProtectedRoute>
        } />

        <Route path="minigame/keylock" element={
            // <ProtectedRoute requiredMinigames={['gamebook', 'moneygrab', 'switchboard', 'tablet', 'codetyping', 'puzzle']} currentMinigame="keylock">
              <KeylockPage />
            // { </ProtectedRoute> }
          } />

        <Route path="minigame/finish/:roomId/:success" element={<MinigameFinishPage />} />

        <Route path="minigame/play/:roomId" element={<MinigameRulesPage />} />
        <Route path="minigame/:id?" element={<MinigameInitialPage />} />

        <Route path="missionend" element={<MissionEndPage />} />
        <Route path="finish" element={<FinishPage />} />
        <Route path="achievements" element={<AchievementsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
