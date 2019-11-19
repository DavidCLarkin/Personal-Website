import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/about.module.scss"
import Indicator from "./indicator"

const About = ({ data }) => (
  <div className={styles.altBackground}>
    <a className={styles.accessibilityLink} href="#about" id="about">
      About
    </a>
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <section>
          <Fade bottom>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>About</h2>
            </div>
            <div className={styles.split}>
              <p className={styles.paragraphLeft}>
                {data.contentfulPost.article.article}
              </p>
              <div className={styles.bar}></div>
              <p className={styles.paragraphRight}>
                {data.contentfulPost.articleRight.articleRight}
              </p>
            </div>
            <Indicator href="#projects" />
          </Fade>
        </section>
      </div>
    </div>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        contentfulPost {
          title
          slug
          subtitle
          article {
            article
          }
          articleRight {
            articleRight
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
)
