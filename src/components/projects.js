import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styles from "../pages/scss/projects.module.scss"

const Projects = ({data}) => (
  <div className={styles.projects}>
    <div className={styles.right}>
      <p>{data.contentfulPost.article.article}</p>
    </div>
    <div className={styles.left}>
      <h1>PROJECTS{/*data.contentfulPost.title*/}</h1>
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

