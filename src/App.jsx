import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import TownPage from "./Pages/TownPage/TownPage";
import About from "./Pages/About/About";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/town"} element={<TownPage />} />
      <Route path={"/about"} element={<About />} />
    </Routes>
  );
}

export default App;
