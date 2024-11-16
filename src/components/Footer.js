import React from "react";

const Footer = () => {
  return (
      <footer className="bg-dark text-white pt-5 pb-3 mb-0 text-center " >
      <div className="container-fluid ">
    <div className="row">
      {/* Site Hakkında Bölümü */}
      <div className="col-md-4 mb-4 ">
        <h5>About Me</h5>
        <p>I'm a passionate web developer who enjoys creating beautiful and functional web applications. Let's stay in touch!</p>
      </div>
      
      {/* Sosyal Medya Bağlantıları */}
      <div className="col-md-4 mb-4 text-center ">
        <h5>Follow Me</h5>
        <div>
          <a href="https://twitter.com/yourusername" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/yourusername" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>

      {/* İletişim Bilgileri ve Diğer Bağlantılar */}
      <div className="col-md-4 mb-4 text-center ">
        <h5>Contact & Links</h5>
        <p>Email: <a href="mailto:your.email@example.com" className="text-white">your.email@example.com</a></p>
        <ul className="list-unstyled">
          <li><a href="#about" className="text-white">About Me</a></li>
          <li><a href="#projects" className="text-white">Projects</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </div>
    
    {/* Telif Hakkı ve Küçük Yazılar */}
    <div className="text-center pt-3">
      <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      <p>Designed by [Your Name].</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
