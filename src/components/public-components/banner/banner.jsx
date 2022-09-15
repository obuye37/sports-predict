import React from 'react'
import * as styles from '../../index.module.css'

const styled = { 
    container: {
      height: '200px', 
      backgroundColor: '#fff', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position:'relative',
      overflow:'hidden',
    }
}

function Banner() {
  return (
    <div className={styles.textCenter} style={styled.container}>
      <div style={{ margin: 0, zIndex:1}}>
        <span style={{fontSize: '2rem', fontWeight:'bold', margin:0}}>Welcome to</span>
        <h1 style={{fontSize: '4rem', color:'coral', textShadow: ' 2px 2px 5px #333', WebkitTextStroke: '.025rem #eee' , fontWeight:'bold', margin:0}}>Sports Predict!</h1>
        <span style={{fontSize: '1.2rem'}}>Bet Analysis and Prediction for All</span>
      </div>
    </div>    
  )
}
export default Banner

