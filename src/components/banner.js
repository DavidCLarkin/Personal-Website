import React from "react"
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
      height={'calc(100vh + 100px)'}
      params={params} 
      />
    <div className={styles.border}>
      <h1 className={styles.name}>David Larkin.</h1>
      <h3>Software Developer</h3>
    </div>
    <Indicator href="/#about" higherIndicator={true}/>
  </div>
)

export default Banner
