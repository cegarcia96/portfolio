import { motion } from "framer-motion";
function Projects({projectRef}) {

  return (
    <div className="projects-container">
      <div className="projects-row">

        <motion.div className="project-card" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} viewport={{ once:false }}>
          <h3 className="project-header">Atelier</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A product overview page for an eCommerce site made by a team of 4 engineers using React and Styled Components. Includes overview, related items, questions and answers, and ratings and reviews sections.
              </p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail standard-project" src={require('../assets/atelier/review-thumbnail.png')} alt="project thumbnail" />
            </div>
            <div className="project-link">
              See a preview of the entire page along with the code <a href="https://github.com/TeamJBox/rfp2210-fec">here.</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} viewport={{ once:false }}>
          <h3 className="project-header">Atelier API Extension</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A RESTful API optimized to handle up to 5000 requests per second. Developed with a PostgreSQL database and Express. Stress tested with K6 and loader.io. Horizontally scaled using a NGINX load-balancer with four AWS EC2 instances.</p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail standard-project" src={require('../assets/atelier/loader-thumbnail.png')} alt="project thumbnail" />
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/Atelier-System-Design/project-atelier-products-backend">here.</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="projects-row">

        <motion.div className="project-card" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} viewport={{ once:false }}>
          <h3 className="project-header">TFT Board Builder</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A tool to theorycraft boards for the game Teamfight Tactics made with React and Tailwind CSS. Drag and drop champions from the pool onto the board and see the different traits activate. Log in, add some notes to each board and save to share it later.</p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail standard-project" src={require('../assets/tft/tft-thumbnail.png')} alt="tft project thumbnail" />
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/cegarcia96/TFT-Board-Builder">here.</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} viewport={{ once:false }}>
          <h3 className="project-header">Asteroids</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>The classic game developed entirely in Java, and JavaFX for the UI. Dodge and shoot asteroids and try to break your high score!</p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail standard-project" src={require('../assets/asteroids/asteroids-thumbnail.png')} alt="asteroids project thumbnail" />
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/cegarcia96/asteroids">here.</a>
            </div>
          </div>

        </motion.div>


      </div>

      <div className="projects-row" id="centered">

      <motion.div className="project-card" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }} viewport={{ once:false }}>
          <h3 className="project-header">Riff</h3>
          <div className="project-card-content">
            <div className="project-description-alt">
              <p>A mobile chat application made with React Native and Socket.io. Create servers and channels to chat in real time with different communities. Add friends for direct messaging.</p>
            </div>
            <div className="project-preview-container">
              <div className="mobile-image-container">
                <img className="project-thumbnail mobile-project" src={require('../assets/riff/riff-gif.png')} alt="riff project thumbnail" />
              </div>
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/BlueOceanDevelopment/RiffMessenger">here.</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;