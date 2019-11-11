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
      
      {console.log(this.project)}
        <Helmet>
          <title>David Larkin's Portfolio</title>
          <meta name="description" content="David Larkin is a software developer with a BSc in Entertainment Systems (Game Development) He has experience in Games, Android, iOS, Desktop and Web Apps"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <Header />
        <section className={styles.wrapper}>
          <div className={styles.project}>
            <h1>{this.project.title}</h1>
            <h4>{this.project.date}</h4>
            <p>{this.project.description.description}</p>
            <img src={this.project.image.fluid.src} alt={this.project.image.description}></img>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default Project;


/*
const Project =({ title, description, date, image}) => {

  return (
    <>
    <section className={styles.wrapper}>
      <div className={styles.project}>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <p>{description.description}</p>
        <img src={image} alt="test"></img>
      </div>
    </section>
    </>
  );
}

export default Project;
*/
