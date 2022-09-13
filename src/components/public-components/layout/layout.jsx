import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../footer/footer"
import Header from "../header/header"
import "./layout.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
         boxSizing: `border-box`,
         maxWidth: `1200px`,
         zIndex:`100`
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
      <div style={{
        position: 'fixed',
        backgroundColor: '#21212188',
        minWidth:'100%',
        minHeight:'100%',
        left:0,
        top: 0,
        zIndex:-1,
      }}></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
