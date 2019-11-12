import React from "react"
import { Link } from "gatsby"
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

  closeMenu() {  
    const nav = document.getElementById("nav");
    if(nav.style.display == "flex")
      nav.style.display = "none";
  }
  
  openMenu() { 
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

  render() {
    return (
    <>
    <nav className={styles.mobileMenu} id="mobileMenu">
      <Link to={"/"} className={styles.logo}>DL</Link>
      <button className={styles.menuBtn} onClick={this.openMenu}>&#9776;</button>
    </nav>

    <nav className={styles.navBar} id="nav">
      <ul className={styles.leftBar}>
        <li className={styles.logo}>DL</li>
      </ul>
      <ul className={styles.rightBar}>
        <li className={styles.left}><a href="/" onClick={this.closeMenu}>Home</a></li>
        <li className={styles.left}><a href="/#about" onClick={this.closeMenu}>About</a></li>
        <li className={styles.left}><a href="/#projects" onClick={this.closeMenu}>Projects</a></li>
        <li className={styles.left}><a href="/#contact" onClick={this.closeMenu}>Contact</a></li>
      </ul>
    </nav>
    </>
    );
  }
}

export default Header
