import React from "react"
import "../css/banner.css"
import Slide from "react-reveal/Slide"

const Banner= () => (
  <section>
    <div className="image"/>
    <div className="centered-text">
      <Slide left>
        <h1 className="name">David Larkin</h1>
      </Slide>
      <Slide right>
        <h3>Software Developer</h3>
      </Slide>
    </div>
  </section>
)

export default Banner
