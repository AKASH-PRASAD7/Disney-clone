import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Play from "./Pages/Play";
import Search from "./Pages/Search";
import MovieState from "./Context/Movies/MovieState";
import Discover from "./Pages/Discover";
function App() {
  return (
    <div className="App">
      <MovieState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/play/:id" element={<Play />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/discover" element={<Discover />} />
          </Routes>
        </Router>
      </MovieState>
    </div>
  );
}

export default App;
