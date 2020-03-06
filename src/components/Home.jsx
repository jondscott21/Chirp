import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { colors } from '../styles/colors'

const getUsers = gql`
    {
        users {
            id
            email
            messages
        }
    }
`

const Home = () => {
    const { loading, error, data } = useQuery(getUsers)
    if(loading) return <p>...loading</p>
    if(error) return <p>Error: {error}</p>
    console.log(data)
    
    return data.users.map(({ id, email, messages }) => (
        <div key={id}>
            <p>{email}</p>
            {messages && messages.map(message => <p>{message}</p>)}
        </div>
        // <div style={{maxWidth: '550px', display: 'flex', flexWrap: 'wrap', margin: '25% auto'}}>
        //     {colors && colors.map(el => <div style={{height: '100px', width: "100px", background: el, margin: '10px 5px'}}></div>)}
        // </div>
    ))
}

export default Home