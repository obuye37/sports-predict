import React from 'react'
import { Link } from 'gatsby'

import * as styles from './footer.module.css'
import { Facebook, PhoneCall, Twitter, Youtube } from 'react-feather'
import Navigation from '../navigations/navigations'


const Footer = () => {
  return (

    <footer
        className={styles.footer}
    >
      <div className={styles.top_footer}>
        <div style={{display:'flex', flexDirection: 'column', gap:'10px', padding :`var(--space-5)`, }}>
          <div>Logo</div>
          <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
          Maecenas vitae mattis tellus..
          </div>
          <div style={{display:'flex', gap:'10px'}}>
            <Facebook style={{cursor:'pointer'}} />
            <Youtube style={{cursor:'pointer'}} />
            <Twitter style={{cursor:'pointer'}} />
            <PhoneCall style={{cursor:'pointer'}} />
          </div>
        </div>
        <div style={{display:'flex', flexDirection: 'column', gap:'10px', padding :`var(--space-5)`, }}>
          <h2 style={{ margin:0, }}>Quick Links</h2>
          <Navigation />
          <Link to="/admin">Login Admin</Link>
        </div>
        <div className={styles.subContainer}>
          <h2 style={{
            fontFamily: `var(--font-sans)`,
            textAlign: 'center',
          }}>Subscribe to Our Newsletter</h2>
          <div className={styles.formContainer}>
            <input type="email" />
            <button>Subscribe</button>
          </div>
          <div className={styles.small}>Subscribe to receive our weekly predictions earlier</div>
        </div>
      </div>
      <div className={styles.bottom_footer}>
        <span>
        ©  Sports Predict &middot; {new Date().getFullYear()} 
        </span>
      </div>
      
    </footer>
  )
}

export default Footer