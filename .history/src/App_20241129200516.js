import logo from './logo.svg';
import './App.css';
import Framer from './pages/Framer';
import Home from './pages/Home';
import Header from './atoms/Header';
import { BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router once

function App() {
  return (
    <div className="App">
      <Header/>
    <Home/>
    </div>
  );
}

export default App;
