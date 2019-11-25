import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"
import Indicator from "./indicator"

const Projects = ({ data }) => (
  <div className={styles.wrapper}>
    <div className={styles.projects}>
      <section>
        <Fade bottom>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Projects</h2>
          </div>
        </Fade>

        <Fade bottom>
          <div className={styles.imagesList}>
            {data.allContentfulProject.edges.map(edges => (
              <div className={styles.imgContainer} key={edges.node.title}>
                <span className={styles.clickIcon}>
                  <FontAwesomeIcon icon={faHandPointer} />
                </span>
                <span className={styles.tooltip}>{edges.node.brief}</span>
                <Link to={`/${edges.node.title}`}>
                  <img
                    className={styles.hoverImage}
                    src={edges.node.image.fluid.src}
                    alt={edges.node.image.description}
                  ></img>
                </Link>
              </div>
            ))}
          </div>
          <Indicator href="#contact" />
        </Fade>
      </section>
    </div>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulProject {
          edges {
            node {
              id
              title
              brief
              date
              link
              description {
                description
              }
              image {
                fluid {
                  src
                }
                description
              }
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
)
