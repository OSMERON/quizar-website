import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FallingStars from "./components/FallingStars";
import MusicControl from "./components/MusicControl";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Leaderboard from "./pages/Leaderboard";
import Prizes from "./pages/Prizes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <FallingStars />
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <MusicControl />
    </div>
  );
}
