import React from 'react'

import * as styles from './footer.module.css'
import { Facebook, Grid, PhoneCall, Twitter, Youtube } from 'react-feather'
import Navigation from '../navigations/navigations'

const Footer = () => {
  return (
    <footer
        style={{
        fontSize: `var(--font-sm)`,
        color: `#ddd`,
        backgroundColor:'#121212ee',
        }}
    >
      <div className={styles.top_footer}>
        <div style={{display:'grid', gap:'10px', padding :`var(--space-5)`, }}>
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
        <div>
          <h2 style={{ margin:0, }}>Quick Links</h2>
          <Navigation />
        </div>
        <div>
          <h2 style={{
            fontFamily: `var(--font-sans)`
          }}>Subscribe to Our Newsletter</h2>
          <div>
            <input type="email" name="" id="" />
            <input type="button" value="Subscribe" />
          </div>
          <small>Subscribe to receive our weekly predictions earlier</small>
          
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