import React from 'react';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of your first project.",
    details: "Here are more details about Project 1.",
    image: "https://via.placeholder.com/300x200", // Project 1 görseli
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of your second project.",
    details: "Here are more details about Project 2.",
    image: "https://via.placeholder.com/300x200", // Project 2 görseli
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of your third project.",
    details: "Here are more details about Project 3.",
    image: "https://via.placeholder.com/300x200", // Project 3 görseli
  },
  {
    id: 4,
    title: "Project 4",
    description: "A brief description of your fourth project.",
    details: "Here are more details about Project 4.",
    image: "https://via.placeholder.com/300x200", // Project 4 görseli
  },
];



const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hakkımda Bölümü */}
      <section id="about" className="text-center mb-5 animate__animated animate__fadeIn">
        <h1>About Me</h1>
        <p className="lead">
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
          Hi! I'm [Your Name], a passionate developer who loves building web applications and solving problems.
        </p>
      </section>

      {/* Projelerim Bölümü */}
      <section id="projects" className="mb-5 animate__animated animate__zoomIn">
  <h2>My Projects</h2>
  <div className="row g-4">
  {projects.map((project) => (
    <div
      key={project.id}
      className="col-md-4"
      data-aos="fade-up" // Animasyon türü
      data-aos-duration="1000" // Animasyon süresi
    >
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#projectModal${project.id}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
</section>



      {/* İletişim Bölümü */}
<section id="contact" className="text-center animate__animated animate__fadeInUp mt-5">
  <h2>Contact Me</h2>
  <form className="needs-validation" noValidate>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
      <div className="invalid-feedback">Please enter your name.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      <div className="invalid-feedback">Please enter a valid email.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
      <div className="invalid-feedback">Please enter your message.</div>
    </div>
    <button type="submit" className="btn btn-primary">Send</button>
  </form>
</section>







      {/* İletişim Bölümü */}
      <section id="contact" className="text-center animate__animated animate__fadeInUp">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </section>


      {/* Modal Bileşenleri */}
      {/* Project Modal */}
      {projects.map((project) => (
  <div
    key={project.id}
    className="modal fade"
    id={`projectModal${project.id}`}
    tabIndex="-1"
    aria-labelledby={`projectModalLabel${project.id}`}
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id={`projectModalLabel${project.id}`}>
            {project.title}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">{project.details}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
))}

    </div>
  );
};

export default Home;
