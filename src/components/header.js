import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../pages/scss/index.scss"

const Header = ({ siteTitle }) => (
  <div className="outerHeader">
    <nav>
      <ul className="navbar">
        <a href="About">About</a>
        <a href="Resume">Resume</a>
        <a href="Projects">Projects</a>
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
