import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import TownPage from "./Pages/TownPage/TownPage";
import About from "./Pages/About/About";
import Yacht from "./Pages/Yacht/Yacht.jsx";
import Fail from "./Pages/Fail/Fail.jsx";
import Fishing from "./Pages/Fishing/Fishing.jsx";
import Photo from "./Pages/Photo/Photo.jsx";
import PartySea from "./Pages/PartySea/PartySea.jsx";
import WaterFun from "./Pages/WaterFun/WaterFun.jsx";
import Catering from "./Pages/Catering/Catering.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/town"} element={<TownPage />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/yacht/:id"} element={<Yacht />} />
      <Route path={"/fishing"} element={<Fishing />} />
      <Route path={"/photo"} element={<Photo />} />
      <Route path={"/party"} element={<PartySea />} />
      <Route path={"/funwater"} element={<WaterFun />} />
      <Route path={"/catering"} element={<Catering />} />
      <Route path={"*"} element={<Fail />} />
    </Routes>
  );
}

export default App;
