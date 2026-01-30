import Laptop from "../components/Laptop.jsx";


export default function Hero() {
  return (
<section className="container mx-auto py-30 px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Nom */}
          <div className="text-3xl md:text-4xl font-mono text-purple-400 mb-2">
            {"< BOSSA Yannick />"}
          </div>

          {/* Titre */}
          <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
            FRONTEND
            <span className="block text-white/30 mt-1">
              DEVELOPER
            </span>
          </h1>

          {/* Pitch */}
          <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-lg">
            I build clean, responsive, and scalable web interfaces using React.
            I create modern frontend applications with React and Tailwind CSS, 
            focusing on performance and user experience.
          </p>

        
          {/* CTA */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="btn btn-primary btn-md"
            >
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1rLjd_K1irpsBG5qZW7esFgMtyj-orTO1/view?usp=sharing" 
              className="btn btn-outline btn-md text-white"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Laptop SVG */}
        <div>
          <Laptop
            className="laptop_svg__animated w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            style={{
              filter: "drop-shadow(0 10px 15px rgba(110, 51, 200, 0.35))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
