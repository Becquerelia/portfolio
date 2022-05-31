//! IMPORTS:
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Training from "./components/Training.jsx";
import Footer from "./components/Footer.jsx";

//! MAIN FUNCTION:
function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Training />
      <Footer />
    </div>
  );
}

export default App;
