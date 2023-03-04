import { motion } from "framer-motion";


function Skills ({skillRef, projectRef}) {
  return (
    <motion.div className="skills-container" whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }} viewport={{ once:false }} ref={skillRef}>
      <h2 className="skills-header">Skills</h2>
      <div className="skills-icons-container">

        <div className="skills-row">
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/javascript.png')} alt="javascript icon" />
            <div className="skill-description">JavaScript</div>
          </div>
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/html.png')} alt="html icon" />
            <div className="skill-description">HTML</div>
          </div>
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/css.png')} alt="css icon" />
            <div className="skill-description">CSS</div>
          </div>
        </div>

        <div className="skills-row">
          <div className="skill">
              <img className="skill-icon" src={require('../assets/skills/react.png')} alt="react icon" />
              <div className="skill-description">React</div>
          </div>
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/node.png')} alt="node icon" />
            <div className="skill-description">Node</div>
          </div>
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/express.png')} alt="express icon" />
            <div className="skill-description">Express</div>
          </div>
        </div>

        <div className="skills-row">
          <div className="skill">
              <img className="skill-icon" src={require('../assets/skills/mongodb.png')} alt="mongodb icon" />
              <div className="skill-description">mongoDB</div>
          </div>
          <div className="skill">
            <img className="skill-icon" src={require('../assets/skills/postgresql.png')} alt="postgresql icon" />
            <div className="skill-description">PostgreSQL</div>
          </div>
          <div className="skill" ref={projectRef}>
            <img className="skill-icon" src={require('../assets/skills/aws.png')} alt="aws icon" />
            <div className="skill-description">AWS</div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Skills;