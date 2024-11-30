import logo from './logo.svg';
import './App.css';
import Framer from './pages/Framer';
import Home from './atoms/RoutesMain';
import Header from './atoms/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
            <Router>
            <Routes key={location.pathname}>
            <Route path="/" element={<Home/>} />

            </Routes>

    </Router>

    </div>
  );
}

export default App;
