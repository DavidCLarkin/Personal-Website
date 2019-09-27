import React from "react"
import PropTypes from "prop-types"
import homeImage from "../images/laptop-colorful.jpg"
import Footer from "./footer"
import Header from "./header"
import About from "./about"
import "../pages/scss/layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="container">
        <img src={homeImage} alt="laptop with colorful background" />
          <div className="centeredText">
            <h1>David Larkin</h1>
            <h3>Software Developer</h3>
          </div>
      </div>
      <About/>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
