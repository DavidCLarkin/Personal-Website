import PropTypes from "prop-types"
import React from "react"
import styles from "../pages/scss/index.module.scss"

const Header = () => (
  <div className={styles.outerHeader}>
    <nav>
      <ul className={styles.navBar}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="Resume">Resume</a>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
