import React from "react";
import htmlLogo from "../assets/illustrations/html.png";
import cssLogo from "../assets/illustrations/css.png";
import reactLogo from "../assets/illustrations/react.png";
import laravelLogo from "../assets/illustrations/laravel.png";
import Tailwind_CSS from "../assets/illustrations/Tailwind_CSS.png";
import next from "../assets/illustrations/next.png";
import Me from "../assets/illustrations/Me.png";

const About = () => {
  const tools = [
    { name: "HTML", src: htmlLogo },
    { name: "CSS", src: cssLogo },
    { name: "React", src: reactLogo },
    { name: "Laravel", src: laravelLogo },
    { name: "Tailwind CSS", src: Tailwind_CSS },
    { name: "Next.js", src: next },
  ];

  return (
    <section className="container mx-auto px-6 md:px-20 py-18">
      
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-base-content mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* PHOTO CARD */}
        <div className="relative">
          {/* Background card */}
          <div className="w-72 h-96 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-800 shadow-xl"></div>

          {/* Image */}
          <img
            src={Me}
            alt="Yannick Bossa"
            className="absolute top-[-20px] left-[-20px] w-72 h-96 object-cover rounded-3xl shadow-2xl"
          />

          {/* Decorative dot */}
          <span className="absolute -top-6 -right-6 w-16 h-16 border-4 border-dashed border-purple-400 rounded-full"></span>
        </div>

        {/* TEXT */}
        <div className="max-w-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a frontend developer specialized in <span className="text-primary font-semibold">React</span>.  
            I enjoy building clean, responsive, and scalable user interfaces.
            I focus on turning ideas into real-world applications with great user experience.
          </p>

          <h3 className="text-3xl font-semibold mt-10 mb-6 text-base-content">
            Tools & Technologies
          </h3>

          {/* TOOLS */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <button
                key={tool.name}
                aria-label={tool.name}
                className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10
                hover:bg-white/10 hover:scale-105 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={tool.src}
                  alt={`${tool.name} logo`}
                  className="w-12 h-12 mx-auto object-contain"
                />
                <p className="mt-2 text-sm text-center text-gray-400">
                  {tool.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
