import React, { Fragment } from 'react'
import { Link } from 'gatsby'

const styles = {
    fontSize: `var(--font-sm)`,
    textDecoration: `none`,
    color: `white`,
  }

  const menuLinks = ['About us', 'Reviews', 'Contact us']

const Navigation = () => {
  return (
    <Fragment>
        { menuLinks.map( (navlink, idx) => 
        <div key={idx} >
           <Link to={navlink.replace(" ", "-").toLowerCase()} style={ {...styles, margin: '0 10px' } }>
              {navlink}
          </Link>
        </div>
       ) }
    </Fragment>
  )
}

export default Navigation
