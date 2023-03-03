import { useState } from 'react';

function Welcome () {
  const [description, setDescription] = useState(false);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-intro" onAnimationEnd={() => setDescription(true)}> Hi, I'm Chris</div>
        <div className="profile-container">
          {description ? <img className="profile-picture" src={require('../assets/profilePicture.jpeg')} alt="profile"/> : <img className="profile-picture-hidden" src={require('../assets/profilePicture.jpeg')} alt="profile"/>}
        </div>
        {description ? <div className="welcome-description">A Software Engineer</div> : <div className="welcome-description-hidden">A Software Engineer</div>}
      </div>
    </div>
  )
}

export default Welcome;