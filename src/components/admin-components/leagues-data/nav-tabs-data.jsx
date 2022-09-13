import React from "react"
import PredictionTable from "../../public-components/predictionTable/predictionTable"
import  Leagues  from "./leagues-data"

export const Epl = () => {
    return(
        <PredictionTable />
    )
}

export const Laliga = () => {
    return(
        <Leagues competitions='liga' />
    )
}

export const SerieA = () => {
    return(
        <Leagues competitions='seriea' />
    )
}

export const Bundesliga = () => {
    return(
        <Leagues competitions='bundesliga'/>
    )
}

export const Ligue1 = () => {
    return(
        <Leagues competitions={`ligue1`}/>
    )
}