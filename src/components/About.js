function About() {
  return (
    <div className="about-container">
      <div className="profile-container">
        <img className="profile-picture" src={require('../assets/profilePicture.jpeg')} alt="profile"/>
      </div>
      <div className="about-description">
      <h2 className="about-header"> Welcome! </h2>
        <p>
          I'm Chris Garcia, a software engineer. With a background in science I enjoy applying the logical thinking and analytical skills I developed to solve complex problems. I was drawn to software engineering because of the ever-changing nature of the industry and the opportunities for lifelong learning. Here you'll find descriptions of my projects and links to the codebase for each one.
        </p>
        <p>
          Check out my <a href="https://www.linkedin.com/in/christopher-garcia96/">LinkedIn</a>, <a href="https://github.com/cegarcia96">GitHub</a>, and <a href="https://drive.google.com/file/d/1CqEOCU_nuHKAVDi_v8g5Qo2cCINSXOwT/view?usp=sharing">resume</a> at the links below.
        </p>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/christopher-garcia96/">
            <img className="icon" src={require('../assets/icons/linkedin-icon.png')} alt="linkedin icon" />
          </a>
          <a href="https://github.com/cegarcia96">
            <img className="icon" src={require('../assets/icons/github-icon.png')} alt="github icon"/>
          </a>
          <a href="https://drive.google.com/file/d/1CqEOCU_nuHKAVDi_v8g5Qo2cCINSXOwT/view?usp=sharing">
            <img className="icon" src={require('../assets/icons/resume-icon.png')} alt="resume icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
