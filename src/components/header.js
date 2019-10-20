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

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const nav = document.getElementById("nav");
    if (window.innerWidth >= 797) {
      nav.style.display = "flex";
    }
  }
  
  openMenu() {
    if(window.matchMedia("{max-width: 796px}"))
    {
      console.log("Pressed")
      const nav = document.getElementById("nav");
      this.setState((prevState) => {
        return {menuPressed: !prevState.menuPressed};
      })

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
    <button className={styles.menu} onClick={this.openMenu}>Menu</button>
    <nav className={styles.navBar} id="nav">
      <ul className={styles.rightBar}>
        <li className={styles.left}><a href="#about">about</a></li>
        <li className={styles.left}><a href="#projects">projects</a></li>
        <li className={styles.left}><a href="#resume">resume</a></li>
        <li className={styles.right}><a href="https://github.com/DavidCLarkin"><FontAwesomeIcon icon={faGithub}/></a></li>
        <li className={styles.right}><a href="https://www.linkedin.com/in/david-larkin/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li className={styles.right}><a href="mailto:davidlarkin96@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
      </ul>
    </nav>
    </>
    );
  }
}

export default Header
