import logo from './logo.svg';
import './App.css';
import Framer from './pages/Framer';
import Home from './atoms/RoutesMain';
import Header from './atoms/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <div className="App">
            <Router>
            <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/our-team" element={<OurTeam/>} />
            <Route path="/>
            </Routes>

    </Router>

    </div>
  );
}

export default App;
