import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceCerts from "./components/ExperienceCerts";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-base-900 font-body">
      <Sidebar />
      <main className="pt-16 lg:pt-0 lg:pl-64">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceCerts />
        <Contact />
      </main>
    </div>
  );
}

export default App;
