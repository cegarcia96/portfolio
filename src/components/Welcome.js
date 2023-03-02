import { useState } from 'react';

function Welcome () {
  const [description, setDescription] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-intro" onAnimationEnd={() => setDescription(true)}> Hi I'm Chris</div>
        {description ? <div className="welcome-description">A Software Engineer</div> : <div className="welcome-description-hidden">A Software Engineer</div>}
      </div>
    </div>
  )
}

export default Welcome;