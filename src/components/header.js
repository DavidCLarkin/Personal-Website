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

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.openMenu=this.openMenu.bind(this);
    this.state = {
      menuPressed: false
    }
  }
  
  openMenu() {
    if(window.matchMedia("{max-width: 796px}"))
    {
      console.log("Pressed")
      const nav = document.getElementById("nav");
      this.setState({menuPressed: !this.state.menuPressed})

      if(this.state.menuPressed)
      {
        nav.style.display = "none";
      }
      else {
        nav.style.display = "flex";
      }
    }
  }

  render() {
    return (
    <>
    <div className={styles.menu} onClick={this.openMenu}>Menu</div>
    <nav className={styles.navBar} id="nav">
      <ul className={styles.rightBar}>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#resume">resume</a></li>
        <li><a href="https://github.com/DavidCLarkin"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li><a href="https://www.linkedin.com/in/david-larkin/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li><a href="mailto:davidlarkin96@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </ul>
    </nav>
    </>
    );
  }
}

export default Header
