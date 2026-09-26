import React, { useState, useEffect } from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <div className="logo">Portfolio</div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      <section id="home">
        <div className="container hero-content">
          <div className="hero-wrapper">
            <div className="hero-text">
              <h1>Hi, I'm Maeden Pentoque</h1>
              <p>3rd Year IT Student | Learning to Code | Building my skills one project at a time.</p>
            </div>
            <div className="hero-image">
              <img src="/myphoto.jpg" alt="Maeden Pentoque - IT Student" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                <img src="/awesometodologo.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h3>Awesome Todo App</h3>
                <p className="project-desc">A simple task management built to learn MERN Stack. Create, Read, Update, Delete and mark tasks as complete.</p>
                <div className="project-links">
                  <a href="https://awesometodosapp-29ej.onrender.com" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href="https://github.com/mae123-456/Awesometodosapp" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="/milktealogo.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h3>Bubble Bliss</h3>
                <p className="project-desc">A milk tea shop website built with HTML, CSS, and JavaScript. Features responsive design and product showcase.</p>
                <div className="project-links">
                  <a href="https://mae123-456.github.io/Pentoque_Prefi/" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href="https://github.com/mae123-456/Pentoque_Prefi" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="/sarilogo.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h3>SariStock POS</h3>
                <p className="project-desc">Collaborative Point of Sale system for sari-sari stores. Inventory management and sales tracking features.</p>
                <div className="project-links">
                  <a href="https://arcenojp.github.io/SariStock-_POS/" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href="https://github.com/arcenojp/SariStock-_POS" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="/tastebuds logo.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h3>Urban Tastebuds</h3>
                <p className="project-desc">Collaborative project Online food ordering platform. Browse menu, add to cart, and place orders.</p>
                <div className="project-links">
                  <a href="https://arcenojp.github.io/ITPE-Project-Online-Shop/" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href="https://github.com/arcenojp/ITPE-Project-Online-Shop" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-img">
                <img src="/POSlogo.png" alt="" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <div className="project-info">
                <h3>POS Desktop Application</h3>
                <p className="project-desc">POS Desktop Application — A collaborative Point of Sale system built with Java Swing. Features inventory management, transaction processing, and sales reporting.</p>
                <div className="project-links">
                  <a href="https://arcenojp.github.io/ITCC121-Project--POS-Desktop-Application/" target="_blank" rel="noopener noreferrer">Live</a>
                  <a href="https://github.com/arcenojp/ITCC121-Project--POS-Desktop-Application" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<div className="container">
  <h2 className="section-title">UI/UX Prototypes</h2>
  <p className="section-subtitle">Designs and interactive prototypes created in Figma.</p>
  <div className="projects-grid">
    <div className="project-card">
      <div className="project-img">
        <img src="/waygo.png" alt="WayGo Logo" style={{  width: '100%', height: '180px', objectFit: 'contain'}}/> </div>

      <div className="project-info">
        <h3>WayGo</h3>
        <p className="project-desc">
          A campus navigation app designed to help students easily
          find classrooms, buildings, laboratories, and other locations.
        </p>

        <div className="project-links">
          <a href="https://www.figma.com/proto/xl8pSGQCdW545Q0CTkxTPd/WayGo?node-id=12-3&t=gcqYAZiaRiFvvQSw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A3"
            target="_blank"
            rel="noopener noreferrer">
            Prototype
          </a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-img">
        <img
          src="/npb.png"
          alt="NPB Logo"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="project-info">
        <h3>NPB</h3>

        <p className="project-desc">
          An anti-scam gaming marketplace concept designed to
          provide safer transactions for buyers and sellers.
        </p>

        <div className="project-links">
          <a
            href="https://www.figma.com/proto/9VZOJJKJNzwFGdNIlktBah/NPB?node-id=1-3&p=f&t=AEKjyIuuRIijEuKi-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prototype
          </a>
        </div>
      </div>
    </div>

    <div className="project-card">
      <div className="project-img">
        <img
          src="/rappel.png"
          alt="Rappel Logo"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="project-info">
        <h3>Rappel</h3>

        <p className="project-desc">
          A reminder and alarm app concept designed to help students
          remember important schedules, activities, and events.
        </p>

        <div className="project-links">
          <a
            href="https://www.figma.com/proto/s3BD4SO7OBcsIIq325Eznf/Rappel?node-id=1-3&p=f&t=IuYWWvz21aHI1J8S-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prototype
          </a>
        </div>
      </div>
    </div>

  </div>
</div>




      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills I'm Learning</h2>
          <div className="skills-grid">
            <div className="skill-card"><span>HTML5</span><span className="learning-badge">Learning</span></div>
            <div className="skill-card"><span>CSS3</span><span className="learning-badge">Learning</span></div>
            <div className="skill-card"><span>JavaScript</span><span className="learning-badge">Learning</span></div>
            <div className="skill-card"><span>React</span><span className="learning-badge">Just Started</span></div>
            <div className="skill-card"><span>Node.js</span><span className="learning-badge">Just Started</span></div>
            <div className="skill-card"><span>Express</span><span className="learning-badge">Just Started</span></div>
            <div className="skill-card"><span>MongoDB</span><span className="learning-badge">Just Started</span></div>
            <div className="skill-card"><span>Figma</span><span className="learning-badge">Exploring</span></div>
            <div className="skill-card"><span>Git & GitHub</span><span className="learning-badge">Learning</span></div>
            <div className="skill-card"><span>Python</span><span className="learning-badge">Just Started</span></div>
            <div className="skill-card"><span>Java</span><span className="learning-badge">Learning</span></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-box">
            <div className="about-text">
              <p>I'm a 3rd-year IT student at <strong>Western Institute of Technology</strong> exploring UX design, and I love collaborating with my friends and classmates! Working together on projects helps us share ideas, learn faster, and create better designs.</p>
            </div>
            <div className="contact">
              <div className="contact-details">
                <div className="contact-item"><i className="fas fa-envelope"></i> maedenpentoque97@gmail.com</div>
                <div className="contact-item"><i className="fas fa-phone-alt"></i> 09672363873</div>
                <div className="contact-item"><i className="fab fa-github"></i> github.com/mae123-456</div>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/maeden.pentoque" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://github.com/mae123-456" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025-2027 Maeden Pentoque</p>
        </div>
      </footer>
    </>
  );
}

export default App;
