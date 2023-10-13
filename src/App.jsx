import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./components/pages/Categories";
import Find from "./components/pages/Find";
import Game from "./components/pages/Game";
import Home from "./components/pages/Home";
import MainWrapper from "./components/layout/MainWrapper";
import Navbar from "./components/layout/Navbar";
import WeeklyGames from "./components/pages/WeeklyGames";
import WeeklyGame from "./components/pages/WeeklyGame";

function App() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/categories" element={<Navigate to="/categories/new-games" />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/find" element={<Find />} />
          <Route path="/weekly-games" element={<WeeklyGames />} />
          <Route path="/weekly-games/:id" element={<WeeklyGame />} />
        </Routes>
      </MainWrapper>
    </>
  );
}

export default App;
