function Nav ({aboutRef, skillRef, projectRef}) {
  return (
    <div className="nav-container">
      <div className="nav-button" onClick={() => aboutRef.current.scrollIntoView({behavior:'smooth', block: 'center'})}>ABOUT</div>
      <div className="nav-button" onClick={() => skillRef.current.scrollIntoView({behavior:'smooth', block: 'center'})}>SKILLS</div>
      <div className="nav-button" onClick={() => projectRef.current.scrollIntoView({behavior:'smooth', block: 'start', inline: 'center'})}>PROJECTS</div>
    </div>
  )
}

export default Nav;