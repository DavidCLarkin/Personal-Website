import React from "react";
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../pages/scss/project.module.scss"
import ProjectGallery from "../components/projectGallery";
import ProjectAbout from "../components/projectAbout";

export const query = graphql`
  query ProjectDetails($projectTitle: String) {
    allContentfulProject(filter: {title: {eq: $projectTitle}}) {
      edges {
        node {
          id
          title
          date
          link
          technologies
          description {
            description
          }
          image {
            fluid {
              src
            }
            description
          }
          imageTwo {
            id
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

  constructor(props){
    super(props)
    this.state = {
      index: 0
    }
  }
  
  project = this.props.data.allContentfulProject.edges[0].node;

  render() {
    return ( 
    <>
      <Helmet>
        <title>{this.project.title}</title>
        <meta name="description" content="David Larkin is a software developer with a BSc in Applied Computing (Game Development). He has experience in Games, Android, iOS, Desktop and Web Apps"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <Header />
      <ProjectGallery data={this.project} index={this.state.index} changeImage={this.changeImage} />
      <ProjectAbout data={this.project} />
      <Footer />
    </>
    )
  }
}

export default Project;