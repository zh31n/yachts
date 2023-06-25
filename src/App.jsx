import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import TownPage from "./Pages/TownPage/TownPage";
import About from "./Pages/About/About";
import Yacht from "./Pages/Yacht/Yacht.jsx";
import Fail from "./Pages/Fail/Fail.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/town"} element={<TownPage />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/yacht/:id"} element={<Yacht />} />
      <Route path={"*"} element={<Fail />} />
    </Routes>
  );
}

export default App;
