import React from 'react'
import { useState } from 'react'

import * as styles from './predictionForm.module.css'

function PredictionForm() {
    // const [ mdisplay, setMdisplay] = useState(display)

    // const handleClose = (e) => setMdisplay(!mdisplay)

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log('prediction form')
    }

  return (
    <div className={styles.container}>
        {/* <div style={{fontWeight:'bold'}} onClick={handleClose}>&times; close</div> */}
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label for="homescore">Home Prediction</label>
                <input className={styles.inputs} type='text' name='homescore' />
            </div>
            <div>
                <label for="awayscore">Away Prediction</label>
                <input className={styles.inputs} type='text' name='awayscore' />
            </div>
            <button className={styles.button} type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default PredictionForm