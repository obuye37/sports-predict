import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'

import * as styles from './navigations.module.css'

const menuLinks = ['About us', 'Reviews', 'Contact us']

const Navigation = () => {
  return (
    <div className={styles.container}>
        { menuLinks.map( (navlink, idx) => 
        <div key={idx} >
           <Link to={navlink.replace(" ", "-").toLowerCase()} className={styles.navMenu }>
              {navlink}
          </Link>
        </div>
       ) }
        <Menu className={styles.hambugger} />
        <nav className={styles.mobileMenu}>
          { menuLinks.map( (navlink, idx) => 
          <div key={idx} >
            <Link to={navlink.replace(" ", "-").toLowerCase()} className={styles.navMenu }>
                {navlink}
            </Link>
          </div>
        ) }
        </nav>
    </div>
  )
}

export default Navigation
