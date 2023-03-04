import { useState } from 'react';

function Welcome ({ setDisplayNav }) {
  const [description, setDescription] = useState(false);
  const [photo, setPhoto] = useState(false);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-intro" onAnimationEnd={() => setPhoto(true)}> Hi, I'm Chris</div>
        <div className="profile-container">
          {photo ? <img className="profile-picture" src={require('../assets/profilePicture.jpeg')} alt="profile" onAnimationEnd={() => {setDescription(true); setDisplayNav(true)}}/> : <img className="profile-picture-hidden" src={require('../assets/profilePicture.jpeg')} alt="profile"/>}
        </div>
        {description ? <div className="welcome-description">Welcome to my portfolio</div> : <div className="welcome-description-hidden">Welcome to my portfolio</div>}
      </div>
    </div>
  )
}

export default Welcome;