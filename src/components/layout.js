import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"
import About from "./about"
import Banner from "./banner"
import Projects from "./projects"

import "../pages/scss/layout.scss"

const Layout = () => {

  return (
    <>
      <Header />
      <Banner />
      <a id="about"></a> 
      <About />
      <a id="projects"></a>
      <Projects />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
