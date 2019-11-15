import React from "react"
import Fade from "react-reveal/Fade"
import Indicator from "./indicator"
import Header from "./header"
import Particles from "react-particles-js"
import styles from "../pages/scss/banner.module.scss"


const particle = {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 500 } },
      color: { value: "#ABC6D0" },
      shape: {
        type: "edge",
        stroke: {width: 0.1, color: "#000000"},
        polygon: { nb_sides:5 },
      },
      opacity: { 
        value: 0.3, 
        random: true, anim: {
          enable: false, speed: 0.1, opacity_min:0.1, sync:false
        }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: false, speed: 5, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 400,
          rotateY: 400
        }
      }
    },
    interactivity: {
      detect_on:"canvas",
      events: {
        onhover: {enable:true, mode: "bubble"},
      },
      mode: {
        grab: { distance: 400, line_linked: {opacity:1 } },
        bubble: {
          distance: 300,
          size: 0.1,
          duration: 1,
          opacity: 0.1,
          speed: 1
        },
        repulse: { distance: 200, duration: 0.4},
        push: { particles_nb: 2 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
}


const Banner = () => (
  <div className={styles.banner}>
    <Header />
    <Particles 
      width={'100%'} 
      height={'100vh'}
      params={particle} 
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
