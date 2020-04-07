import React from "react"
import styles from "../pages/scss/project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import Indicator from "./indicator"

class ProjectGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  scrollImage() {
    if (this.state.index === this.props.data.imageTwo.length - 1) {
      this.setState({ index: 0 })
    } else {
      let i = this.state.index
      i += 1
      this.setState({ index: i })
    }
  }

  /*
  componentDidMount() {
    this.timerID = setInterval(() => this.scrollImage(), 5000)
  }
  */

  render() {
    return (
      <div>
        <section className={styles.project}>
          <h2 className={styles.heading}>{this.props.data.title}</h2>
          <div className={styles.info}>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} />
              {" " + this.props.data.date}
            </p>
          </div>
          <div className={styles.gallery}>
            <Gallery
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              index={this.state.index}
              onRequestChange={i => {
                this.setState({ index: i })
              }}
            >
              {this.props.data.imageTwo.map(image => (
                <GalleryImage
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    maxWidth: "1366px",
                    objectFit: "cover",
                  }}
                  src={image.fluid.src}
                  key={image.id}
                  alt={image.description}
                />
              ))}
            </Gallery>
          </div>
          <div className={styles.indicatorPadding}>
            <Indicator href="#info" />
          </div>
        </section>
      </div>
    )
  }
}

export default ProjectGallery
