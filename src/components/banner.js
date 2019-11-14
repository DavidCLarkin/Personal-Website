import React from "react"
import "../css/banner.css"
import Fade from "react-reveal/Fade"
import Indicator from "./indicator"
import Header from "./header"

const Banner = () => (
  <section className="starsBg">
    <Header />
    <div className="star star1"></div>
    <div className="star star2"></div>
    <div className="star star3"></div>
    <div className="star star4"></div>
    <div className="star star5"></div>
    <div className="star star6"></div>
    <div className="star star7"></div>
    <div className="star star8"></div>

    <div className="container">
      <h1 className="name">David Larkin.</h1>
      <h3>Software Developer</h3>
    </div>
    <Fade bottom>
      <Indicator href="/#about"/>
    </Fade>
  </section>
)

export default Banner
