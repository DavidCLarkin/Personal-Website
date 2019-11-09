import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WebFont from 'webfontloader';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)
/*
if(typeof window !== 'undefined')
{
  WebFont.load({
    google: {
      families: ['Quicksand:400,700', 'sans-serif']
    }
  });
}
*/

export default IndexPage
