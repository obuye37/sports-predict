import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "../navigations/navigations"

const Header = ({ siteTitle }) => {

  const styles = {
    fontSize: `var(--font-sm)`,
    textDecoration: `none`,
    color: `white`,
  }

  return (
    <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `#151515`,
    }}
  >
    <Link
      to="/"
      style={styles}
    >
      {siteTitle}
    </Link>
    <div style={{display:'flex'}}>
      <Navigation />
    </div>
    <div style={styles}>
      <span style={{cursor:"pointer"}}>Join</span>
      <span style={{margin: "0 5px" }}> | </span>
      <span style={{cursor:"pointer"}}>SignIn</span>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
