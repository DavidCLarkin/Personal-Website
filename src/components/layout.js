import React from "react"
import PropTypes from "prop-types"
import homeImage from "../images/laptop-colorful.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import "../pages/scss/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <img src={homeImage} alt="laptop with colorful background" />
          <div className="centeredText">
            <h1>David Larkin</h1>
            <h3>Software Developer</h3>
          </div>
      </div>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
