import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">URL Shortener</Link>
          <Link to="/stats" className="nav-link">Statistics</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
