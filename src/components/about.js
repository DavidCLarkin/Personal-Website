import { graphql, StaticQuery } from "gatsby"
import React from "react"
import "../pages/scss/about.scss"

const About = ({data}) => (
  <div className="about">
    <h1>{data.contentfulPost.title}</h1>
    <p>{data.contentfulPost.article.article}</p>
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

