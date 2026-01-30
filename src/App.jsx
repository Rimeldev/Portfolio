// ✅ SOLUTION A: Single Page App (sans React Router)
import Home from "./pages/Home.jsx";
import PillNav from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation fixe */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <PillNav/>
      </div>

      {/* Contenu principal */}
      <main>
        {/* ✅ Chaque section a son propre container et styling */}
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
         {/* Copyright */}
      <footer className="border-t py-6 text-center text-gray-500 text-xs sm:text-sm">
        ©2025 BOSSA_YANNICK. Tous droits réservés.
      </footer>
      </main>
    </div>
   
  );
}

export default App;