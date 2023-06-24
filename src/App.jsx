import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";

function App() {

  return (
    <Routes>
        <Route path={'/'} element={<Main/>}/>
    </Routes>
  )
}

export default App;
