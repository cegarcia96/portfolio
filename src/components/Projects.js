function Projects() {

  return (
    <div className="projects-container">
      <div className="projects-row">

        <div className="project-card">
          <h3 className="project-header">Atelier</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A product overview page for an eCommerce site made by a team of 4 engineers using React and Styled Components. Includes overview, related items, questions and answers, and ratings and reviews sections. I primarily worked on the ratings and reviews section.
              </p>
              <p>Users are able to sort, filter, search, mark reviews as helpful, report them as inappropriate, and add a review for a product with client-side form validation.
              </p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail" src={require('../assets/atelier/reviews-thumbnail-480.jpg')} alt="project thumbnail"/>
            </div>
            <div className="project-link">
              See a preview of the entire page along with the code <a href="https://github.com/TeamJBox/rfp2210-fec">here.</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-header">Atelier API Extension</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A RESTful API optimized to handle up to 5000 requests per second. Developed with a PostgreSQL database and Express. Stress tested with K6 and loader.io. Horizontally scaled using a NGINX load-balancer with four AWS EC2 instances.</p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail" src={require('../assets/atelier/loader-thumbnail-480.jpg')} alt="project thumbnail"/>
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/Atelier-System-Design/project-atelier-products-backend">here.</a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-row">

        <div className="project-card">
          <h3 className="project-header">TFT Board Builder</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A tool to theorycraft boards for the game Teamfight Tactics made with React and Tailwind CSS. Drap and drop champions from the pool onto the board and see the different traits activate. Log in, add some notes to each board and save to share it later.</p>
            </div>
            <div className="project-preview-container">
              <img className="project-thumbnail" src={require('../assets/tft/tft-board-thumbnail-480.jpg')} alt="project thumbnail"/>
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/cegarcia96/TFT-Board-Builder">here.</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-header">Riff</h3>
          <div className="project-card-content">
            <div className="project-description">
              <p>A mobile chat application made with React Native and Socket.io. Create servers and channels to chat in real time. Add friends for direct messaging.</p>
            </div>
            <div className="project-preview-container">
              <div className="mobile-image-container">
                <img className="project-thumbnail" src={require('../assets/riff/riff-channels-thumbnail-350.jpg')} alt="project thumbnail"/>
                <img className="project-thumbnail" src={require('../assets/riff/riff-chat-thumbnail-350.jpg')} alt="project thumbnail"/>
              </div>
            </div>
            <div className="project-link">
              See the code <a href="https://github.com/BlueOceanDevelopment/RiffMessenger">here.</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;