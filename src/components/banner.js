import React from "react"
import "../css/banner.css"
import Fade from "react-reveal/Fade"

const Banner = () => (
  <section className="starsBg">
    <div className="star star1"></div>
    <div className="star star2"></div>
    <div className="star star3"></div>
    <div className="star star4"></div>
    <div className="star star5"></div>
    <div className="star star6"></div>

    <div className="container">
      <h1 className="name">David Larkin.</h1>
      <h3>Software Developer</h3>
    </div>
    <div className="indicator">
      <a href="/#about">
        <span></span>
      </a>
    </div>
  </section>
)

export default Banner
