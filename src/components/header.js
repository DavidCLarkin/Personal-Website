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
    this.closeMenu=this.closeMenu.bind(this);
    this.state = {
      menuPressed: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  closeMenu() {
    if(window.innerWidth > 796) return; //return if not smaller viewport

    const nav = document.getElementById("nav");
    nav.style.display = "none";
  }

  resize() {
    const nav = document.getElementById("nav");
    if (window.innerWidth > 796) {
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
    <nav className={styles.mobileMenu}>
      <div className={styles.logo}>DL</div>
      <button className={styles.menuBtn} onClick={this.openMenu}>Menu</button>
    </nav>

    <nav className={styles.navBar} id="nav">
      <ul className={styles.leftBar}>
        <li className={styles.logo}>DL</li>
      </ul>
      <ul className={styles.rightBar}>
        <li className={styles.left}><a href="#about" onClick={this.closeMenu}>about</a></li>
        <li className={styles.left}><a href="#projects" onClick={this.closeMenu}>projects</a></li>
        <li className={styles.left}><a href="#resume" onClick={this.closeMenu}>resume</a></li>
        <li className={styles.left}><a href="#contact" onClick={this.closeMenu}>contact</a></li>
      </ul>
    </nav>
    </>
    );
  }
}

export default Header
