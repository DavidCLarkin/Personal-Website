import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"

const Projects = ({data}) => (
  <div className={styles.wrapper}>
    <div className={styles.projects}>

      <section className={styles.right}>
        <Fade bottom cascade>
          {data.allContentfulProject.edges.map(edges => (
            <section className={styles.project} key={edges.node.title}>
              <div className={styles.container}>
                <a href={edges.node.link}>{edges.node.title}</a>
                <p className={styles.date}>{edges.node.date}</p>
                <img src={edges.node.image.fluid.src} alt={edges.node.image.description}></img>   
              </div>
                  
              <p className={styles.description}>{edges.node.description.description}</p>
            </section>
          ))} 
        </Fade>
      </section>

      <section className={styles.left}>
        <Fade right>
          <h1>PROJECTS{/*data.contentfulPost.title*/}</h1>
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

