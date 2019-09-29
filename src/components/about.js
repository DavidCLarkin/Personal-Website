import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from 'react-reveal/Fade'
import styles from "../pages/scss/about.module.scss"

const About = ({data}) => (
  <div className={styles.about}>
    <div className={styles.left}>
      <Fade left>
        <h1>ABOUT{/*data.contentfulPost.title*/}</h1>
      </Fade>
    </div>
    <div className={styles.right}>
      <Fade right>
        <p>{data.contentfulPost.article.article}</p>
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

  render={ data => <About data={data} {...props} /> }
  />
)

