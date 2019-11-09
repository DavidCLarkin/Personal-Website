import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"
import About from "./about"
import Banner from "./banner"
import Projects from "./projects"
import Helmet from "react-helmet"

import "../pages/scss/layout.scss"

const Layout = () => {

  return (
    <>
      <Helmet>
        <title>David Larkin's Portfolio</title>
        <meta name="description" content="David Larkin is a software developer with a BSc in Entertainment Systems (Game Development) He has experience in Games, Android, iOS, Desktop and Web Apps"></meta>
      </Helmet>
      <Header />
      <Banner />
      <a href="#about" id="about"/> 
      <About />
      <a href="#projects" id="projects"/>
      <Projects />
      <a href="#contact" id="contact"/>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
