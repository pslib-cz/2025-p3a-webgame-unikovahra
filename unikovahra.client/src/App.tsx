import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import StartPage from "./pages/StartPage";

import GamebookPage from "./pages/GamebookPage";
import SwitchboardPage from "./pages/SwitchboardPage";
import TabletPage from "./pages/TabletPage";
import HackingPage from "./pages/HackingPage";
import KeylockPage from "./pages/KeylockPage";
import DollarPage from "./pages/DollarPage";
import MoneyGrabPage from "./pages/MoneyGrabPage";
import FinishPage from "./pages/FinishPage";
import NotFoundPage from "./pages/NotFoundPage";

import MinigameInitialPage from "./pages/MinigameInitialPage";
import MinigameRulesPage from "./pages/MinigameRulesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
      <Route index element={<StartPage />} />

      <Route path="gamebook/:id?" element={<GamebookPage />} />

      <Route path="minigame/switchboard" element={<SwitchboardPage />} />
      <Route path="minigame/tablet" element={<TabletPage />} />
      <Route path="minigame/hacking" element={<HackingPage />} />
      <Route path="minigame/keylock" element={<KeylockPage />} />
      <Route path="minigame/dollar" element={<DollarPage />} />
      <Route path="minigame/moneygrab" element={<MoneyGrabPage />} />
      
      <Route path="minigame/play/:roomId" element={<MinigameRulesPage />} />
      <Route path="minigame/:id?" element={<MinigameInitialPage />} />

      <Route path="finish" element={<FinishPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
