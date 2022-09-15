import { Link } from 'gatsby'
import React from 'react'

import * as styles from './buttons.module.css'

export const RegisterBtn = () => {
  return (
    <div className={styles.registerBtn}>
        <Link to='/sign-in'>Show More Predictions</Link>
    </div>
  )
}
