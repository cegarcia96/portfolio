function Projects() {

  return (
    <div className="projects-container">
      <div className="project-card">
        <h3>Atelier</h3>
        <div className="project-card-content">
          <div className="project-description">
            <p>A full-stack product overview page for an eCommerce site made by a team of 4 engineers. Includes overview, related items, questions and answers, and ratings and reviews sections. I primarily worked on the Ratings and Reviews section. Users are able to sort, filter, search, mark reviews as helpful, report them as inappropriate, and add a review for a product with client-side form validation. Accompanied by a back-end API capable of handling up to 5000 requests per second. See a preview of the entire page along with the front-end code <a href="https://github.com/TeamJBox/rfp2210-fec">here</a> and the back-end code <a href="https://github.com/Atelier-System-Design/project-atelier-products-backend">here</a></p>
          </div>
          <div className="project-preview-container">
            <img className="project-thumbnail" src={require('../assets/atelier/reviews-thumbnail-600.jpg')} alt="project thumbnail"/>
          </div>
        </div>
      </div>

      <div className="project-card-alternate">
        <h3>Atelier</h3>
        <div className="project-card-content">
        <div className="project-preview-container">
            <img className="project-thumbnail" src={require('../assets/tft/tft-board-thumbnail-600.jpg')} alt="project thumbnail"/>
          </div>
          <div className="project-description">
            <p>A tool to theorycraft boards for the game Teamfight Tactics. Drap and drop champions from the pool onto the board and see the different traits activate. Log in, add some notes to each board and save to share it later. Check out the code here.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <h3>Atelier</h3>
        <div className="project-card-content">
          <div className="project-description">
            <p>A mobile chat application made with React Native. Create servers and channels to chat in real time. Add friends for direct messaging. See the front-end code here and back-end here.</p>
          </div>
          <div className="project-preview-container">
            <img className="project-thumbnail" src={require('../assets/riff/riff-channels-thumbnail-400.jpg')} alt="project thumbnail"/>
            <img className="project-thumbnail" src={require('../assets/riff/riff-chat-thumbnail-400.jpg')} alt="project thumbnail"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;