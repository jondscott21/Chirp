import React from 'react'

const Chirp = (props) => {
    const { message } = props
    return (
    <div>
        <h4>Posters name <span>Poster Handle . Time</span></h4>
        <p>{message}</p>
    </div>
    )
}

export default Chirp