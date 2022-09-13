import React, { Fragment } from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';

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

  return (
    <Fragment>
      {
        Object.keys(fixtures).map((matchday) => (
          <Fragment key={matchday}>
            {
            fixtures[matchday].map((({MatchDay, awayLogo, awayTeam, homeLogo, homeTeam }) => (
              <Fragment>
                <div>{MatchDay}</div>
                <div>{awayLogo}</div>
                <div>{awayTeam}</div>
                <div>{homeLogo}</div>
                <div>{homeTeam}</div>
              </Fragment>
            )))
            }
          </Fragment>
          
          )
        )  
      }
    </Fragment>
  )
}

export default Leagues