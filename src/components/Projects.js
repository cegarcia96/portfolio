import { useState } from 'react';

function Projects() {

  const [hovering, setHovering] = useState({
    atelier: false,
  })

  return (
    <div className="projects-container">
      <div className="project-card">
        <h3>Atelier</h3>
        <div className="project-card-content">
          <p>A full-stack product overview page for an eCommerce site made by a team of 4 engineers. Includes overview, related items, questions and answers, and ratings and reviews sections. I primarily worked on the Ratings and Reviews section. Users are able to sort, filter, search, mark reviews as helpful, report them as inappropriate, and add a review for a product with client-side form validation. Accompanied by a back-end API capable of handling up to 5000 requests per second. See a preview of the entire page <a href="https://github.com/TeamJBox/rfp2210-fec">here</a> and the back-end code <a href="https://github.com/Atelier-System-Design/project-atelier-products-backend">here</a></p>
          <div className="project-preview-container" onMouseEnter={() => setHovering({...hovering, atelier:true})} onMouseLeave={() => setHovering({...hovering, atelier: false})}>
            {hovering.atelier ? <img className="project-preview" src={require('../assets/reviews.gif')} /> : <img src={require('../assets/reviews-thumbnail-800.jpg')}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;