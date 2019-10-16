import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import styles from "../pages/scss/header.module.scss"

const Header = () => (
  <nav className={styles.navBar}>
    <ul className={styles.leftBar}>
      <li><a href="https://github.com/DavidCLarkin"><FontAwesomeIcon icon={faGithub}/></a></li>
      <li><a href="https://www.linkedin.com/in/david-larkin/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
    </ul>
    <ul className={styles.rightBar}>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resume">Resume</a></li>
    </ul>
  </nav>
)

export default Header
