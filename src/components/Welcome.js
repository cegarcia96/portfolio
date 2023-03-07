import { useState } from 'react';
import { motion } from "framer-motion";

function Welcome ({ setDisplayNav, displayNav }) {

  const [greeting, setGreeting] = useState(false);
  const [description, setDescription] = useState(false);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="profile-container">
          <img className="profile-picture" src={require('../assets/profilePicture.jpeg')} alt="profile" onAnimationEnd={() => setGreeting(true)}/>
        </div>
        <div className="welcome-text">
          {greeting ? <div className="welcome-intro" onAnimationEnd={() => setDescription(true)}> Hi, I'm <b>Chris.</b></div> : <div className="welcome-intro-hidden"> Hi, I'm <b>Chris.</b></div>}
          {description ? <div className="welcome-description" onAnimationEnd={() => setDisplayNav(true)}>A software engineer. Welcome to my portfolio.</div> : <div className="welcome-description-hidden">A software engineer. Welcome to my portfolio.</div>}
        </div>
        {displayNav ? <motion.div className="welcome-scroll" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2}}>Please Scroll Down</motion.div> : <motion.div style={{visibility: 'hidden'}} className="welcome-scroll-hidden" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2}}>Please Scroll Down</motion.div>}
      </div>
    </div>
  )
}

export default Welcome;