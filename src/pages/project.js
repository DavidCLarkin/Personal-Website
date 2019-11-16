import React from "react";
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../pages/scss/project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faLink
} from "@fortawesome/free-solid-svg-icons"
import { Gallery, GalleryImage } from 'react-gesture-gallery'

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

  scrollImage() {
    if(this.state.index === this.project.imageTwo.length-1) {
      this.setState({index: 0})
    }
    else {
      let i = this.state.index
      i += 1
      this.setState({index: i})
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.scrollImage(),
      3000
    );
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
      <section className={styles.wrapper}>
        <div className={styles.project}>
          <section className={styles.padding}>
            <h2 className={styles.heading}>{this.project.title}</h2>
            <div className={styles.info}>
              <p><FontAwesomeIcon icon={faCalendarAlt}/>{" " + this.project.date}</p>
              <div className={styles.bar}></div>
              <a className={styles.hover} href={this.project.link}><FontAwesomeIcon icon={faLink}/>{" Link To Project"}</a>
            </div>
            <div className={styles.gallery}>
              <Gallery
                style={{
                  position: "relative",
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }} 
                index={this.state.index}
                onRequestChange={i => {
                  this.setState({index: i});
                }}>
                {this.project.imageTwo.map(image => (
                  <GalleryImage 
                    style={{
                      maxHeight:'400px',
                    }}
                    src={image.fluid.src}
                    objectFit="contain" />
                ))}
              </Gallery>
            </div>
          </section>

          <section className={styles.padding}>
            <h4 className={styles.subheading}>About this Project</h4>
            <p>{this.project.description.description}</p>
          </section>
          <section className={styles.padding}>
            <h4 className={styles.subheading}>Technologies Used</h4>
            <ul className={styles.list}>
              {this.project.technologies.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

      </section>
      <Footer />
      </>
    )
  }
}

export default Project;