import { graphql, StaticQuery, Link} from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLink
} from "@fortawesome/free-solid-svg-icons"

const Projects = ({data}) => (
    <div className={styles.wrapper}>
      <div className={styles.projects}>
        <section>
          <Fade cascade>
            <h2>Projects</h2>
          </Fade>
          <div className={styles.imagesList}>
            {data.allContentfulProject.edges.map(edges => (
              <div className={styles.imgContainer} key = {edges.node.title}>
                <img className={styles.hoverImage} src={edges.node.image.fluid.src} alt={edges.node.image.description}></img>
                <div className={styles.middle}>
                  <ul>
                    <li><a href={edges.node.link} className={styles.text}>
                      {edges.node.title + " "}
                      <FontAwesomeIcon icon={faLink}/>
                    </a></li>
                    <li>
                      <Link 
                        to={`/${edges.node.title}`}
                        /*state={{ 
                          title: edges.node.title,
                          description: edges.node.description,
                          date: edges.node.date ,
                          image: edges.node.image.fluid.src
                        }}
                        */
                        className={styles.text}
                      >{"Read More.."}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              ))}
          </div>
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

