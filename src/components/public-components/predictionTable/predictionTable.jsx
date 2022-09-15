import React from 'react'
import * as styles from './prediction-table.module.css'

const  PredictionTable = ({ league }) => {
    const matches = [
        {
            id:1,
            homeLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F577.png",
            homeTeam:" Nottingham Forest ",
            homePrediction: "1",
            awayLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F211.png",
            awayTeam:" Fulham ",
            awayPrediction: "3",
            MatchDay:" 16/09/2022 ",
        },
        {
            id:2,
            homeLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F199.png",
            homeTeam:" Aston Villa ",
            homePrediction: "3",
            awayLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F615.png",
            awayTeam:" Southampton ",
            awayPrediction: "5",
            MatchDay:" 16/09/2022 ",
        },
        {
            id:3,
            homeLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F203.png",
            homeTeam:" Wolves ",
            homePrediction: "2",
            awayLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F209.png",
            awayTeam:" Manchester City ",
            awayPrediction: "3",
            MatchDay:" 17/09/2022 ",
        },
        {
            id:4,
            homeLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F207.png",
            homeTeam:" Newcastle United ",
            homePrediction: "0",
            awayLogo:"https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F622.png",
            awayTeam:" Bournemouth ",
            awayPrediction: "0",
            MatchDay:" 17/09/2022 ",
        }
    ]
  return (
    <div className={styles.table_container}>
        <div className={styles.table_header}>
            <div>#</div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold'}}>Fixtures/Prediction</div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><b>Date</b></div>
        </div>
        {matches.map(({id, MatchDay, awayLogo, awayTeam, homeLogo, homeTeam, homePrediction, awayPrediction }) => {
            return (
            <div key={id} className={styles.table_body}>
                <div>{id}</div>
                <div className={styles.fixtures}>
                    <div className={styles.hometeam}>
                        <img className='teamlogo' src={homeLogo} alt={`${homeTeam} Logo`}/>
                        <div>{homeTeam}</div>
                        <div className={styles.predictions}>{homePrediction}</div>
                    </div>
                    <div className={styles.awayteam}>
                        <div className={styles.predictions}>{awayPrediction}</div>
                        <div>{awayTeam}</div>
                        <img src={awayLogo} className="teamlogo" alt={`${awayTeam} Logo`} />
                    </div>
                </div>
                <div className={styles.matchday}>{MatchDay}</div>           
            </div>
            )
        })}
    </div>
    
  )
}

export default PredictionTable