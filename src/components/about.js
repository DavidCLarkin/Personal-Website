import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styles from "../pages/scss/about.module.scss"

const About = ({data}) => (
  <div className={styles.about}>
    <div className={styles.left}>
      <h1>ABOUT{/*data.contentfulPost.title*/}</h1>
    </div>
    <div className={styles.right}>
      <p>{data.contentfulPost.article.article}</p>
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

  render={ data => <About data={data} {...props} /> }
  />
)

