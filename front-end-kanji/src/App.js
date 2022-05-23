import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './game.js';
import About from './about.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game meters="home" />} />
        <Route path="/home/" element={<Game meters="home" />} />
        <Route path="/quiz/:id/" element={<Game grades="1" meters="quiz" />} />
        <Route path="/quiz/" element={<Game meters="home" error="noGrades" />} />
        <Route path="/about/" element={<Game meters="about" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
