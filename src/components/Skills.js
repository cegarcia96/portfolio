import { useState } from 'react';
import { motion } from "framer-motion"


function Skills () {
  return (
    <motion.div className="skills-container" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }} viewport={{ once:true }}>
      <h2 className="skills-header">Skills</h2>
      <div className="skills-icons-container">
        <img className="skill-icon" src={require('../assets/skills/js.png')} alt="javascript icon" />
        <img className="skill-icon" src={require('../assets/skills/css.png')} alt="css icon" />
        <img className="skill-icon" src={require('../assets/skills/react.png')} alt="react icon" />
        <img className="skill-icon" src={require('../assets/skills/node.png')} alt="node icon" />
        <img className="skill-icon" src={require('../assets/skills/postgresql.png')} alt="postgresql icon" />
        <img className="skill-icon" src={require('../assets/skills/mongodb.png')} alt="mongodb icon" />
        <img className="skill-icon" src={require('../assets/skills/aws.jpeg')} alt="aws icon" />
      </div>
    </motion.div>
  )
}

export default Skills;