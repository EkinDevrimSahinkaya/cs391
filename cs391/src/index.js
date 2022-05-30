import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
// import Products from "./containers/Products";
import AddGame from "./containers/AddGame";
import Contact from "./containers/Contact";
import About from "./containers/About";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        { <Route path="addgame" element={<AddGame />} /> }
        <Route path="contact" element={<Contact />} />
        { <Route path="about" element={<About />} /> }
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>  
    </Routes>
  </BrowserRouter>
);