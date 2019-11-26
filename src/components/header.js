import React from "react"
import { Link } from "gatsby"
import styles from "../pages/scss/header.module.scss"
import icon from "../images/logo.png"

class Header extends React.Component {

  xIcon = "&#9747;";
  hamburgerIcon = "&#9776;";

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
    const mobNav = document.getElementById("menuBtn");
    if(nav.style.opacity == 1)
    {
      nav.style.opacity = 0;
      nav.style.visibility = "hidden";
      mobNav.innerHTML = this.hamburgerIcon;
    }
  }
  
  openMenu() { 
    const nav = document.getElementById("nav");
    const mobNav = document.getElementById("menuBtn");
    this.setState((prevState) => {
      return {menuPressed: !prevState.menuPressed};
    })

    if(this.state.menuPressed)
    {
      //nav.style.display = "none";
      nav.style.opacity = 0;
      nav.style.visibility = "hidden";
      mobNav.innerHTML = this.hamburgerIcon;

    }
    else {
      nav.style.opacity = 1;
      nav.style.visibility = "visible";
      mobNav.innerHTML = this.xIcon;
      //nav.style.display = "flex";
    }
  }

  render() {
    return (
    <>
      <nav className={styles.mobileMenu} id="mobileMenu">
        <Link to={"/"} className={styles.logo}><img src={icon} alt="logo"></img></Link>
        <button className={styles.menuBtn} onClick={this.openMenu} id="menuBtn">&#9776;</button>
      </nav>

      <section className={styles.wrapper}>
        <nav className={styles.navBar} id="nav">
          <ul className={styles.leftBar}>
            <Link to={"/"} className={styles.logoBrowser}><img src={icon} alt="logo" /></Link>
          </ul>
          <ul className={styles.rightBar}>
            {/*<li className={styles.left}><Link to="/" onClick={this.closeMenu}>Home</Link></li>*/}
            <li className={styles.left}><Link to="/#about" onClick={this.closeMenu}>About</Link></li>
            <li className={styles.left}><Link to="/#projects" onClick={this.closeMenu}>Projects</Link></li>
            <li className={styles.left}><Link to="/#contact" onClick={this.closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </section>
    </>
    );
  }
}

export default Header
