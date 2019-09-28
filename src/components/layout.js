import React from "react"
import PropTypes from "prop-types"
import homeImage from "../images/laptop-colorful.jpg"
import Footer from "./footer"
import Header from "./header"
import About from "./about"
import Banner from "./banner"
import "../pages/scss/layout.scss"

const Layout = () => {

  return (
    <>
      <Header />
      <Banner />
      <a id="about"></a> 
      <About />     
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
