import Base from "./Layout/Base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SteakStake from "./Pages/Farms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<SteakStake />} />
          </Routes>
        </Base>
      </div>
    </BrowserRouter>
  );
}

export default App;
