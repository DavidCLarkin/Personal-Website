import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from 'react-reveal/Fade'
import styles from "../pages/scss/about.module.scss"
import Indicator from "./indicator"

const About = ({data}) => (
  <div className={styles.wrapper}>
    <div className={styles.about}>
      <section>
        <Fade bottom>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>About</h2>
          </div>
          <p className={styles.paragraphCenter}>{data.contentfulPost.article.article}</p>
          <Indicator href="#projects"/>
        </Fade>
      </section>
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

