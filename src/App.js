// src/App.js
import "./styles.css";

// Import all the components we just created
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Cv from "./Cv";
import Documents from "./Documents";
import Contact from "./Contact";
import Footer from "./Footer";

// This is the main component that assembles the page
export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
        <hr />
        <About />
        <hr />
        <Cv />
        <hr />
        <Documents />
        <hr />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
