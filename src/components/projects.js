import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"

const Projects = ({data}) => (
  <div className={styles.projects}>
    <div className={styles.right}>
      <Fade left>
        <p>{data.contentfulPost.article.article}</p>
      </Fade>
    </div>
    <div className={styles.left}>
      <Fade right>
        <h1>PROJECTS{/*data.contentfulPost.title*/}</h1>
      </Fade>
    </div>
  </div>
)

export default props => (
  <StaticQuery 
  query= { 
    graphql `query {
      contentfulPost {
        title
        slug
        subtitle
        article {
          article
        }
      }
    }
    `
  }

  render={ data => <Projects data={data} {...props} /> }
  />
)

