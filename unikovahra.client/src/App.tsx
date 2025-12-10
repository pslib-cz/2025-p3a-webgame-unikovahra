import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import StartPage from "./pages/StartPage";

import GamebookPage, {gamebookLoader} from "./pages/GamebookPage";
import SwitchboardPage from "./pages/SwitchboardPage";
import TabletPage from "./pages/TabletPage";
import HackingPage from "./pages/HackingPage";
import KeylockPage from "./pages/KeylockPage";
import DollarPage from "./pages/DollarPage";
import MoneyGrabPage from "./pages/MoneyGrabPage";
import FinishPage from "./pages/FinishPage";
import NotFoundPage from "./pages/NotFoundPage";

import MinigameInitialPage, {minigameLoader} from "./pages/MinigameInitialPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<StartPage />} />

        <Route path="gamebook/:id" element={<GamebookPage />} loader={gamebookLoader} errorElement={<NotFoundPage />} />


        <Route path="minigame" element={<MinigameInitialPage />} loader={minigameLoader} errorElement={<NotFoundPage />} />
        {/*  jeste jedna stranka jako pravidla pro kazdou minihru? */ }

        <Route path="minigame/switchboard" element={<SwitchboardPage />} />
        <Route path="minigame/tablet" element={<TabletPage />} />
        <Route path="minigame/hacking" element={<HackingPage />} />
        <Route path="minigame/keylock" element={<KeylockPage />} />
        <Route path="minigame/dollar" element={<DollarPage />} />
        <Route path="minigame/moneygrab" element={<MoneyGrabPage />} />

        <Route path="finish" element={<FinishPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
