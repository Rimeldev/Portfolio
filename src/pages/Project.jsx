import { projects } from "../assets/projectsData.js";

const Project = () => {
  return (
    <section className="container mx-auto px-10 mt-20 md:px-20">
       <div className="text-center mb-16">
  <h2 className="text-5xl md:text-6xl font-bold text-base-content mb-4">Projets</h2>
   <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
       </div>
    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 p-5 rounded-lg shadow-md flex flex-col items-center hover:border-2 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Titre */}
            <h3 className="font-bold mt-2 text-xl">{project.title}</h3>

            {/* Description */}
            <div className="text-start">
              <p className="mt-2">{project.description}</p>
              <p className="mt-4 text-blue-300 font-bold">{project.stack}</p>
            </div>

            {/* Liens */}
            <div className="flex justify-end w-full space-x-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Icône GitHub */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github hover:text-primary"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                {/* Icône External Link */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-external-link-icon hover:text-primary lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
