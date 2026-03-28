// src/App.js
import "./styles.css";

// Import components
import Header from "./Header";
import Home from "./Home";
import Cv from "./Cv";
import Documents from "./Documents";
import Contact from "./Contact";
import Footer from "./Footer";

// Main App Component
export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <hr />

        <section id="cv">
          <Cv />
        </section>

        <hr />

        <section id="documents">
          <Documents />
        </section>

        <hr />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
