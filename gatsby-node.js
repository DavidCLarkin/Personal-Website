/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
const path = require(`path`);
const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulProject {
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
    `  ).then(result => {
    result.data.allContentfulProject.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.title}`,
        component: path.resolve(`./src/pages/project.js`),
        context: {
          projectTitle: node.title
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};