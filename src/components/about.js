import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Fade from 'react-reveal/Fade'
import styles from "../pages/scss/about.module.scss"

const About = ({data}) => (
  <div className={styles.wrapper}>
    <div className={styles.about}>
      {//<section className={styles.left}>
        //<Fade left>
          //<h1>ABOUT{/*data.contentfulPost.title*/}</h1>
        //</Fade>
      //</section>
      }
      
      <section>
        <Fade cascade>
          <h1>About</h1>
        </Fade>
        <Fade cascade>
          <p>{data.contentfulPost.article.article}</p>
        </Fade>
      </section>

    </div>
  </div>
)

export default props => (
  <StaticQuery 
  query= { 
    graphql `query {
      contentfulPost {
        title
        slug
        subtitle
        article {
          article
        }
      }
    }
    `
  }

  render={ data => <About data={data} {...props} /> }
  />
)

