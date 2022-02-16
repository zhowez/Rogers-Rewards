import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

import Home from "./Components/Home.js";
import Application from "./Components/Application.js";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <Link to="/"> Home </Link>
          <Link to="/Application">APP </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Application" element={<Application />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
