import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Message envoyé avec succès 🚀");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        alert("Erreur lors de l'envoi ❌");
      }
    );
};


  return (
    <section className="min-h-screen bg-base-100 py-20">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-base-content mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
          {/* Formulaire - Côté gauche */}
          <div className="bg-base-300 p-8 md:p-12 lg:w-1/2">
            <h3 className="text-2xl font-bold text-base-content mb-2">
              Envoyez un message
            </h3>
            <p className="text-base-content/70 mb-8">
              Je suis ouvert aux collaborations, contactez-moi ci-dessous.
            </p>

            <div className="space-y-6">
              {/* Nom */}
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none rounded-none pb-3 text-base-content placeholder-base-content/50"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none rounded-none pb-3 text-base-content placeholder-base-content/50"
                  required
                />
              </div>

              {/* Sujet */}
              <div className="form-control">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none rounded-none pb-3 text-base-content placeholder-base-content/50"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-control">
                <textarea
                  name="message"
                  placeholder="Écrivez votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="textarea textarea-bordered w-full bg-transparent border-0 border-b-2 border-base-content/20 focus:border-primary focus:outline-none rounded-none pb-3 text-base-content placeholder-base-content/50 resize-none"
                  required
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="btn btn-outline btn-primary hover:btn-primary group px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Envoyer le message
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Informations de contact - Côté droit */}
          <div className="bg-gradient-to-br from-primary to-secondary p-8 md:p-12 lg:w-1/2 text-primary-content">
            <h3 className="text-2xl font-bold mb-2">Contactez-moi</h3>
            <p className="text-primary-content/90 mb-10">
              Je suis ouvert aux commissions, envoyez-moi un message ci-contre.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-content/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-content/70 text-sm">Email:</p>
                  <p className="font-semibold">Yannickbossa@gmail.com</p>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-content/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-content/70 text-sm">Adresse:</p>
                  <p className="font-semibold">Lokossa, Bénin</p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-content/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-content/70 text-sm">Téléphone:</p>
                  <p className="font-semibold">+229 O1 94 17 97 42</p>
                </div>
              </div>

              {/* Site web */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-content/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-content/70 text-sm">Site web:</p>
                  <p className="font-semibold">https://portfolio-rho-wheat-97.vercel.app/</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-12">
              <p className="text-primary-content/70 text-sm mb-4">
                Suivez-moi:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/prima%C3%ABl-bossa-557573288/"
                   target="_blank"
  rel="noopener noreferrer"
                  className="bg-primary-content/20 p-3 rounded-full hover:bg-primary-content/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1Am8sXH3Uz/"
                   target="_blank"
  rel="noopener noreferrer"
                  className="bg-primary-content/20 p-3 rounded-full hover:bg-primary-content/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.498v-9.294H9.847v-3.622h2.976V8.413c0-2.951 1.8-4.556 4.43-4.556 1.26 0 2.343.093 2.657.135v3.08h-1.823c-1.432 0-1.709.682-1.709 1.68v2.203h3.417l-.445 3.622h-2.972V24h5.822C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Rimeldev"
                   target="_blank"
  rel="noopener noreferrer"
                  className="bg-primary-content/20 p-3 rounded-full hover:bg-primary-content/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.95.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.54-3.87-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.44-2.28 1.17-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.17 1.84 1.17 3.09 0 4.38-2.69 5.34-5.26 5.62.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
