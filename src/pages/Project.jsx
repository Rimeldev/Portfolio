import { projects } from "../assets/projectsData.js";

const Project = () => {
  return (
    <section className="container mx-auto px-6 md:px-30 py-24">

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-base-content mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 
            bg-base-100/40 backdrop-blur
            hover:border-primary
            transition-all duration-300 shadow-lg"
          >
            {/* Image */}
          <div className="overflow-hidden rounded-t-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="
      w-full 
      h-40 sm:h-56 md:h-60 
      object-cover 
      group-hover:scale-105 
      transition-transform duration-500
    "
  />
</div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 hover:text-primary transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github hover:text-primary" > <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /> <path d="M9 18c-4.51 2-5-2-7-2" /> </svg>
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 hover:text-primary transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
