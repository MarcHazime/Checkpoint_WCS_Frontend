import "./App.css";

import { Route, Routes } from "react-router-dom";

import Continent from "./Pages/Continent";
import Details from "./Pages/DetailsPays";
import Pays from "./Pages/Pays";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Continent />} />
            <Route path="/continent/:code" element={<Pays/>} />
            <Route path="/pays/:code" element={<Details/>} />
          </Routes>
    </div>
  );
}

export default App;
