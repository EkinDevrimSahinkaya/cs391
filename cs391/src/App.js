import { Routes, Route } from "react-router-dom";
import GameNavbar from "./components/GameNavbar";
import AddGame from "./containers/AddGame";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Game from "./containers/Game";

export default function App() {
  return (
    <div>
      <GameNavbar />
      <Routes>
        {<Route path="/" element={<Game />} default="selected" />}
        {<Route path="addgame" element={<AddGame />} />}
        <Route path="contact" element={<Contact />} />
        {<Route path="about" element={<About />} />}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}
