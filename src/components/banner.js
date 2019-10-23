import React from "react"
import "../css/banner.css"
import Fade from "react-reveal/Fade"

const Banner= () => (
  <section>
    <div className="image"/>

    <div className="centered-text">
      <Fade cascade>
        <h1 className="name">David Larkin</h1>
      </Fade>
      <Fade cascade>
        <h3>Software Developer</h3>
      </Fade>
    </div>
  </section>
)

export default Banner
