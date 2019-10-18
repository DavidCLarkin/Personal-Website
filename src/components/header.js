import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"

import styles from "../pages/scss/header.module.scss"

const Header = () => (
  <nav className={styles.navBar}>
    <ul className={styles.rightBar}>
      <li><a href="#about">about</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="#resume">resume</a></li>
      <li><a href="https://github.com/DavidCLarkin"><FontAwesomeIcon icon={faGithub}/></a></li>
      <li><a href="https://www.linkedin.com/in/david-larkin/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
      <li><a href="mailto:davidlarkin96@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
    </ul>
  </nav>
)

export default Header
