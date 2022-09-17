import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'

import * as styles from './navigations.module.css'
import { useState } from 'react'

const menuLinks = ['About us', 'Reviews', 'Contact us']

const Navigation = ({display}) => {
  const [ toggleMobileMenu, setToggleMobileMenu ] = useState(false)
  const displayMobileMenu = (e) => {
    e.preventDefault()
    setToggleMobileMenu(!toggleMobileMenu)
  }

const closeMobileNav = (e) => {
  e.preventDefault()
  setToggleMobileMenu(!toggleMobileMenu)
}

  return (
    <div style={{display:display}} className={styles.container}>
        { menuLinks.map( (navlink, idx) => 
        <div key={idx} >
           <Link to={navlink.replace(" ", "-").toLowerCase()} className={styles.navMenu }>
              {navlink}
          </Link>
        </div>
       ) }
        <Menu onClick={displayMobileMenu} className={styles.hambugger} />
        {
          toggleMobileMenu && (
          <nav className={styles.mobileMenu}>
            <div onClick={closeMobileNav} className={styles.closeNav}>&times;</div>
            { menuLinks.map( (navlink, idx) => 
            <div key={idx} >
              <Link to={navlink.replace(" ", "-").toLowerCase()} className={styles.mobileNav }>
                  {navlink}
              </Link>
            </div>
          ) }
          </nav>
          )
        }
        
    </div>
  )
}

export default Navigation
