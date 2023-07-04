import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play from "./Pages/Play";
import MovieState from "./Context/Movies/MovieState";

function App() {
  return (
    <div className="App">
      <MovieState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/play/:id" element={<Play />} />
          </Routes>
        </Router>
      </MovieState>
    </div>
  );
}

export default App;
