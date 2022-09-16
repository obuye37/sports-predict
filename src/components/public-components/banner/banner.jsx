import React from 'react'
import * as styles from './banner.module.css'

function Banner() {
  return (
    <div className={`${styles.textCenter} ${styles.container}`}>
      <div style={{ margin: 0, zIndex:1}}>
        <h1 className={styles.maininfo}>PREMIER LEAGUE PREDICT</h1>
        <span className={styles.info}>League Analysis and Prediction for All</span>
      </div>
    </div>    
  )
}
export default Banner

