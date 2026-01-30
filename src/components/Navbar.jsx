import { Home, Folder, Briefcase, Info, SquareUserRound } from "lucide-react";
import { useState } from "react";

export default function FloatingNavbar() {
  const [active, setActive] = useState("Home");

 
 const items = [
    { name: "Home", icon: Home , target: "#home"},
    { name: "About", icon: Info, target: "#about"},
    { name: "Projects", icon: Folder, target: "#projects"},
    { name: "Contact", icon: SquareUserRound, target: "#contact"},
  ];

  function handleNavigation(target, name) {
    setActive(name);
    const section = document.querySelector(target);
    if(section){
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg">
        {items.map(({ name, icon: Icon, target }) => (
          <button
            key={name}
            onClick={() => handleNavigation(target, name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
              ${
                active === name
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
          >
            <Icon size={18} />
            {active === name && <span>{name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}
