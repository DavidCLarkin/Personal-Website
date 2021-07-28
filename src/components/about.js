import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/about.module.scss"
import Indicator from "./indicator"

const About = ({ data }) => (
  <div>
    <a className={styles.accessibilityLink} href="#about" id="about">
      About
    </a>
    <div className={styles.altBackground}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <section>
            <Fade bottom>
              <div className={styles.headingContainer}>
                <h2 className={styles.heading}>About</h2>
              </div>
              <div className={styles.split}>
                <div class={styles.leftContainer}>
                <div className={styles.bgBoxContainerLeft}>
                  <svg className={styles.bgBoxLeft} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5,-66.7C48.7,-58.5,58,-48.7,59.8,-37.3C61.6,-25.9,56,-12.9,57,0.6C57.9,14.1,65.5,28.1,61.8,36.2C58,44.3,43,46.3,30.8,48.8C18.6,51.2,9.3,54.1,-2.1,57.7C-13.5,61.3,-26.9,65.6,-33.7,60C-40.5,54.4,-40.6,39,-48.8,27.3C-57,15.7,-73.3,7.8,-80.9,-4.4C-88.6,-16.6,-87.5,-33.3,-76.8,-40.5C-66,-47.8,-45.6,-45.6,-31.2,-52.1C-16.7,-58.5,-8.4,-73.5,2.4,-77.6C13.1,-81.7,26.3,-75,37.5,-66.7Z" transform="translate(100 100)" />
                  </svg>
                </div>
                  <p className={styles.paragraphLeft}>
                    {data.contentfulPost.article.article}
                  </p>
                </div>
                <div className={styles.bar}></div>
                <div className={styles.rightContainer}>
                  <div className={styles.bgBoxContainerRight}>
                    <svg className={styles.bgBoxRight} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.9,-39C34.6,-30.7,55.2,-37.2,68.1,-33.2C81,-29.2,86.3,-14.6,81.2,-2.9C76.1,8.7,60.7,17.4,50.8,26.8C41,36.2,36.8,46.3,29.2,48.9C21.7,51.6,10.8,46.9,0.3,46.4C-10.2,45.8,-20.5,49.5,-32.8,49.6C-45.1,49.7,-59.5,46.2,-61,37.3C-62.4,28.4,-51,14.2,-50.9,0.1C-50.7,-14,-61.8,-28.1,-62,-39.7C-62.1,-51.3,-51.2,-60.6,-39,-69.2C-26.9,-77.8,-13.4,-85.8,-4.4,-78.2C4.7,-70.6,9.3,-47.4,21.9,-39Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <p className={styles.paragraphRight}>
                    {data.contentfulPost.articleRight.articleRight}
                  </p>
                </div>
              </div>
              <Indicator href="#projects" />
            </Fade>
          </section>
        </div>
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
