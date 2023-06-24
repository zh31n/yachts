import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import TownPage from "./Pages/TownPage/TownPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/town"} element={<TownPage />} />
    </Routes>
  );
}

export default App;
