import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Project from "../components/project";
import Helmet from "react-helmet"
import "../pages/scss/layout.scss"
import { throws } from "assert";

const ProjectPage = ({ location }) => {

  /*
  constructor(props)
  {
    super(props);
    this.state = {
      title: this.props
    };

    console.log(this.props);
  }
  */
  
    return (
      <>
        <Helmet>
          <title>David Larkin's Portfolio</title>
          <meta name="description" content="David Larkin is a software developer with a BSc in Entertainment Systems (Game Development) He has experience in Games, Android, iOS, Desktop and Web Apps"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <Header />
        <Project 
          title={location.state.title} 
          description={location.state.description} 
          date={location.state.date}
          image={location.state.image}
          />
        <Footer />
      </>
    )
}

export default ProjectPage
