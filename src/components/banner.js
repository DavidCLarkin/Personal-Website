import React from "react"
import Fade from "react-reveal/Fade"
import Indicator from "./indicator"
import Header from "./header"
import Particles from "react-particles-js"
import styles from "../pages/scss/banner.module.scss"
import { particle as params } from "../helpers/variables"

const Banner = () => (
  <div className={styles.banner}>
    <Header />
    <Particles 
      width={'100%'} 
      height={'calc(100vh + 200px)'}
      params={params} 
      />
    <h1 className={styles.name}>David Larkin.</h1>
    <h3>Software Developer</h3>
    <Indicator href="/#about" higherIndicator={true}/>


    {/*<div className="star star1"></div>
    <div className="star star2"></div>
    <div className="star star3"></div>
    <div className="star star4"></div>
    <div className="star star5"></div>
    <div className="star star6"></div>
    <div className="star star7"></div>
    <div className="star star8"></div>*/}

  </div>
)

export default Banner
