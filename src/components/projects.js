import { graphql, StaticQuery, Link} from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLink
} from "@fortawesome/free-solid-svg-icons"
import Indicator from "./indicator"

const Projects = ({data}) => (
    <div className={styles.wrapper}>
      <div className={styles.projects}>
        <section>
          <div className={styles.headingContainer}>
            <Fade bottom>
              <h2 className={styles.heading}>Projects</h2>
            </Fade>
          </div>

          <Fade bottom>
            <div className={styles.imagesList}>
              {data.allContentfulProject.edges.map(edges => (
                <div className={styles.imgContainer} key = {edges.node.title}>
                  <img className={styles.hoverImage} src={edges.node.image.fluid.src} alt={edges.node.image.description}></img>
                  <div className={styles.middle}>
                    <ul>
                      <li><a href={edges.node.link} className={styles.text}>
                        <FontAwesomeIcon icon={faLink}/>
                        {" " + edges.node.title}
                      </a></li>
                      <li>
                        <Link 
                          to={`/${edges.node.title}`}
                          className={styles.text}
                        >{"Read More"}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                ))}
            </div>
            <Indicator href="#contact"/>
          </Fade>
        </section>
      </div>
    </div>
)

export default props => (
  <StaticQuery 
  query= { 
    graphql `query {
      allContentfulProject {
        edges {
          node {
            id
            title
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
    `
  }

  render={ data => <Projects data={data} {...props} /> }
  />
)

