import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';

import * as styles from './leagues.module.css'

const Leagues = ({competitions}) => {
  const [fixtures, setFixtures] = useState([])

  const RequestHeader = {
    method: 'GET',
    url: `https://football98.p.rapidapi.com/${competitions}/fixtures`,
    headers: {
      'X-RapidAPI-Key': '204f02139amshc200a93be919d7dp153da0jsnc3c1039b7b11',
      'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(RequestHeader).then(function (response) {
      setFixtures(response.data[0]) 
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  const [ predict, setPredict ] = useState(fixtures)

  const addPrediction = (e) => {
    e.preventDefault()
    const homeValue = e.target.name['home'].value
    const awayValue = e.target.name['away'].value
    setPredict(...predict, {awayPrediction:awayValue, homePrediction:homeValue})
  }

  useEffect(() => {
      console.log('send info to mongodb/firebase')
  }, [predict])

  return (
    <div>
      {
        Object.keys(fixtures).map((matchday) => (
          <div style={{ backgroundColor:'white', padding:'10px 0', marginBottom:'5px' }} key={matchday}>
            <h1 style={{textAlign:'center'}}>{matchday}</h1>
            <div className={styles.fixtureRow}>
            {
            fixtures[matchday].map((({MatchDay, awayLogo, awayTeam, homeLogo, homeTeam }) => (
              <div className={styles.fixtureCard}>
                <div className={styles.cardHead}>{MatchDay}</div>
                <div className={styles.cardBody}>
                  <img src={homeLogo} alt={`${homeTeam} logo`} />
                  <h3>{homeTeam}</h3>
                  <input style={{width:'10%'}} type='text' name='home-score' />


                  <div style={{display:'flex', justifyContent:'center', alignItems:'baseline'}}>
                    <span style={{fontSize:'24px', margin:'0 5px'}}>vs</span>
                  </div> 

                  
                  <input style={{width:'10%'}} type='text' name='away-score' />
                  <img src={awayLogo} alt={`${awayTeam} logo`} />
                  <h3>{awayTeam}</h3>
                 
                  <button onClick={addPrediction}>Predict Match Result</button>
                </div>
              </div>
            )))
            }
            </div>
          </div>
          )
        )  
      }
    </div>
  )
}

export default Leagues