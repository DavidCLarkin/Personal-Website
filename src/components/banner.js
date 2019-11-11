import React from "react"
import "../css/banner.css"
import Fade from "react-reveal/Fade"

const Banner= () => (
  <section className="starsBg">
    <div className="star star1"></div>
    <div className="star star2"></div>
    <div className="star star3"></div>
    <div className="star star4"></div>
    <div className="centerText">
    <div className="border">
      <h1 className="name">David Larkin.</h1>
    </div>
      <Fade cascade>
        <h3>Software Developer</h3>
      </Fade>
    </div>
    <div className="indicator">
      <span></span>
    </div>
  </section>
)

export default Banner
