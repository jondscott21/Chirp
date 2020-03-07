import React from 'react'

const Chirp = (props) => {
    const { message } = props
    return (
    <p>{message}</p>
    )
}

export default Chirp