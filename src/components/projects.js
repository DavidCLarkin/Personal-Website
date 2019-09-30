import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"

const Projects = ({data}) => (
  <div className={styles.wrapper}>
    <div className={styles.projects}>
      <div className={styles.right}>
        <Fade bottom cascade>
          <div>
          {data.allContentfulProject.edges.map(edges => (
            <div className={styles.project} key={edges.node.title}>
              <div className={styles.container}>
                <a href={edges.node.link}>{edges.node.title}</a>
                <p className={styles.date}>{edges.node.date}</p>
                <img src={edges.node.image.fluid.src} alt={edges.node.image.description}></img>    
              </div>
              <div className={styles.description}>     
                <p>{edges.node.description.description}</p>
              </div> 
            </div>
          ))} 
          </div>
        </Fade>
      </div>
      <div className={styles.left}>
        <Fade right>
          <h1>PROJECTS{/*data.contentfulPost.title*/}</h1>
        </Fade>
      </div>
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

