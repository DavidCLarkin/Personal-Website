import React from "react";
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"

import styles from "../pages/scss/project.module.scss"

export const query = graphql`
  query ProjectDetails($projectTitle: String) {
    allContentfulProject(filter: {title: {eq: $projectTitle}}) {
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

class Project extends React.Component {
  
  project = this.props.data.allContentfulProject.edges[0].node;

  render() {
    return ( 
      <>
        <Helmet>
          <title>{this.project.title}</title>
          <meta name="description" content="David Larkin is a software developer with a BSc in Entertainment Systems (Game Development) He has experience in Games, Android, iOS, Desktop and Web Apps"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <Header />
        <section className={styles.wrapper}>
          <div className={styles.project}>
            <h2>{this.project.title}</h2>
            <div className={styles.info}>
              <p>{this.project.date}</p>
              <a className={styles.hover} href={this.project.link}>Link To Project</a>
            </div>
            <div className={styles.image}>
              <img className={styles.pic} src={this.project.image.fluid.src} alt={this.project.image.description}></img>
            </div>
            <p>{this.project.description.description}</p>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default Project;