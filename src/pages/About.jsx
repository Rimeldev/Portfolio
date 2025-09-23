import React from "react";
import htmlLogo from "../assets/illustrations/html.png";
import cssLogo from "../assets/illustrations/css.png";
import reactLogo from "../assets/illustrations/react.png";
import laravelLogo from "../assets/illustrations/laravel.png";
import Tailwind_CSS from "../assets/illustrations/Tailwind_CSS.png";


const About = () => {
  const tools = [
    { name: "HTML", src: htmlLogo },
    { name: "CSS", src: cssLogo },
    { name: "React", src: reactLogo },
    { name: "Laravel", src: laravelLogo },
    { name: "Tailwind CSS", src: Tailwind_CSS },
  ];

  return (
    <section className="container mx-auto px-10 md:px-20">
       <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-base-content mb-4">À propos</h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
       </div>
  

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
         <div className="flex justify-end">
            <img
              className="hover:scale-105 transition-transform duration-400 w-100"
                style={{
      filter: 'drop-shadow(0 25px 25px rgba(147, 51, 234, 0.5))'
    }}
              src="src/assets/profil.svg"
              alt="profil"
            />
        </div>
        <div className="text-lg max-w-lg ">
          <span className="font-bold text-5xl leading-tight  ">Developpeur <br/> Front-end</span><br/>
         <p className="text-justify mt-4 ">Je suis un développeur front-end passionné, spécialisé dans la création d’interfaces web modernes et intuitives.  
Mon expertise repose sur l’utilisation de technologies comme React, Tailwind CSS et Laravel, que j’intègre pour concevoir des solutions performantes et esthétiques. <br />
Curieux et motivé, j’aime transformer des idées en projets concrets qui offrent une réelle valeur ajoutée.
Mon objectif est de développer des applications innovantes, accessibles et optimisées, afin d’apporter des expériences utilisateurs fluides et efficaces.  

          </p>
          <h3 className="text-4xl mt-4 font-semibold mb-4">
            Outils
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {tools.map((tool) => (
          // button pour l'accessibilité (focus clavier) + aria-label
          <button
            key={tool.name}
            aria-label={tool.name}
            className="p-2 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-400 filter grayscale hover:grayscale-0 focus:grayscale-0"
          >
            <img
              src={tool.src}
              alt={`${tool.name} logo`}
              className="w-12 h-12 object-contain"
            />
          </button>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
