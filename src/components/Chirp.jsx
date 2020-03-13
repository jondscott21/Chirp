import React from 'react'
import { ChirpWrapper } from '../styles/ChirpStyles'

const Chirp = (props) => {
    const { message } = props
    return (
    <ChirpWrapper>
        <h4>Posters name <span>Poster Handle . Time</span></h4>
        <p>{message}</p>
    </ChirpWrapper>
    )
}

export default Chirp