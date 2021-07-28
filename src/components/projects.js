import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import styles from "../pages/scss/projects.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"
import Indicator from "./indicator"

const Projects = ({ data }) => {
  
  const blobs = [
    "M45.4,-68.8C57.1,-63.2,63.5,-47.6,66.8,-32.8C70.1,-17.9,70.1,-3.9,68.1,9.7C66,23.4,61.8,36.6,54.5,50C47.2,63.4,36.9,76.9,24.3,78.7C11.7,80.6,-3.1,70.7,-16.7,63.6C-30.3,56.5,-42.8,52.2,-56,44.4C-69.1,36.6,-83,25.3,-88,10.8C-92.9,-3.7,-89,-21.2,-80.2,-35C-71.4,-48.8,-57.8,-58.8,-43.6,-63.3C-29.5,-67.8,-14.7,-66.9,1.1,-68.6C16.9,-70.2,33.8,-74.5,45.4,-68.8Z",
    "M25.1,-40.9C33.2,-33.8,41.1,-28.1,53.3,-19.1C65.6,-10.1,82.3,2,80,10.8C77.7,19.6,56.4,25.1,43.4,34.6C30.4,44.1,25.7,57.7,15.9,66C6.1,74.3,-8.7,77.2,-21.9,73.8C-35.1,70.3,-46.6,60.3,-50.1,48C-53.5,35.7,-48.9,21,-52.4,6.6C-55.9,-7.8,-67.6,-22,-69.1,-36.8C-70.5,-51.6,-61.8,-67.1,-48.6,-71.8C-35.4,-76.6,-17.7,-70.6,-4.6,-63.5C8.5,-56.3,17,-47.9,25.1,-40.9Z",
    "M29.2,-47.8C38,-39.8,45.3,-31.9,46.5,-23C47.8,-14.2,43,-4.3,44.7,8.7C46.4,21.8,54.6,38.1,50,43.2C45.4,48.3,28,42.2,14.5,43.6C0.9,45,-8.7,53.8,-21,56.9C-33.3,60,-48.2,57.3,-59.2,48.9C-70.3,40.5,-77.6,26.3,-82,10.4C-86.4,-5.5,-87.9,-23.2,-79.7,-34.4C-71.5,-45.6,-53.5,-50.4,-38.6,-55.6C-23.6,-60.7,-11.8,-66.2,-0.8,-65C10.2,-63.8,20.4,-55.7,29.2,-47.8Z",
    "M26,-42.8C37.7,-32.9,54.1,-32.5,62.6,-25.2C71.2,-18,71.9,-3.8,65.8,6.5C59.7,16.7,46.7,23,37.5,31C28.2,38.9,22.7,48.6,12.7,58.5C2.7,68.4,-11.7,78.7,-21.1,74.7C-30.5,70.6,-35,52.4,-39.9,38.9C-44.9,25.5,-50.3,16.7,-58.6,4.3C-66.8,-8.2,-78,-24.5,-75.2,-35.9C-72.3,-47.3,-55.6,-53.8,-40.7,-62.4C-25.9,-70.9,-12.9,-81.5,-2.9,-76.9C7.1,-72.4,14.2,-52.8,26,-42.8Z",
    "M40.2,-52.4C55.2,-52.8,72.8,-47.1,80.9,-35.2C89,-23.4,87.6,-5.5,80,7.8C72.3,21.1,58.5,29.9,48.5,42.8C38.5,55.7,32.5,72.9,22.7,74.6C12.8,76.3,-0.8,62.6,-13.9,55.2C-27.1,47.8,-39.8,46.7,-45.8,39.7C-51.8,32.8,-51,20,-54.9,6.6C-58.8,-6.8,-67.5,-20.8,-66.7,-33.7C-65.9,-46.7,-55.6,-58.6,-42.9,-59.3C-30.2,-60,-15.1,-49.4,-1.3,-47.4C12.5,-45.4,25.1,-52,40.2,-52.4Z",
    "M48.3,-72.5C61.4,-66.7,70.1,-51.3,77.2,-35.4C84.3,-19.4,89.7,-2.9,82.3,8C74.8,18.9,54.4,24.2,42.9,36.8C31.4,49.4,28.8,69.4,20.4,73.7C12.1,78.1,-2.1,66.7,-18.5,62.3C-35,57.9,-53.7,60.3,-67.2,53.4C-80.7,46.5,-89.1,30.2,-86.4,15.5C-83.7,0.8,-70,-12.5,-61.3,-26.6C-52.7,-40.8,-49.2,-55.9,-39.8,-63.4C-30.4,-70.9,-15.2,-70.9,1.2,-72.7C17.6,-74.6,35.2,-78.3,48.3,-72.5Z",
    "M38.6,-57.8C51,-52,62.8,-43,62.9,-31.9C63,-20.8,51.5,-7.5,48.7,6.5C45.9,20.5,51.8,35.3,49.6,49.5C47.4,63.7,37,77.3,24,80.7C10.9,84.1,-4.9,77.2,-17.2,68.9C-29.5,60.6,-38.4,50.8,-46.7,40.8C-55,30.7,-62.8,20.4,-69.6,6.9C-76.4,-6.7,-82.3,-23.5,-76.7,-34.7C-71.1,-46,-54,-51.7,-39.3,-56.4C-24.6,-61.2,-12.3,-64.9,0.4,-65.5C13.1,-66.1,26.1,-63.5,38.6,-57.8Z"
  ];

  return (
  <div className={styles.wrapper}>
    <div className={styles.projects}>
      <section>
        <Fade bottom>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>Projects</h2>
          </div>
        </Fade>

        <Fade bottom>
          <div className={styles.imagesList}>
            {data.allContentfulProject.edges.map(edges => (
              <div className={styles.imgContainer} key={edges.node.title}>
                <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d={blobs[Math.floor(Math.random()*blobs.length)]} transform="translate(100 100)" />
                </svg>
                <span className={styles.clickIcon}>
                  <FontAwesomeIcon icon={faHandPointer} />
                </span>
                <span className={styles.tooltip}>{edges.node.brief}</span>
                <Link to={`/${edges.node.title}`}>
                  <img
                    className={styles.hoverImage}
                    src={edges.node.image.fluid.src}
                    alt={edges.node.image.description}
                  ></img>
                </Link>
              </div>
            ))}
          </div>
          <Indicator href="#contact" />
        </Fade>
      </section>
    </div>
  </div>);
  }

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulProject {
          edges {
            node {
              id
              title
              brief
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
    `}
    render={data => <Projects data={data} {...props} />}
  />
)
