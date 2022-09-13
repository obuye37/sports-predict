import React from "react"
import  Leagues  from "./leagues-data"

export const Epl = () => {
    return(
        <Leagues competitions='premierleague' />
    )
}

export const Laliga = () => {
    return(
        <Leagues competitions='liga' />
    )
}

export const SerieA = () => {
    return(
        <div>SERIE A Data</div>
    )
}

export const Burdesliga = () => {
    return(
        <div>BURDESLIGA Data</div>
    )
}

export const Ligue1 = () => {
    return(
        <div>LIGUE 1 Data</div>
    )
}

// const epldata = {
//     fixtures : {
//         id: 1,
//         fixture: Manchester
//     }
// }