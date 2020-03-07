import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { colors } from '../styles/colors'
import Chirp from './Chirp'
import { HomeWrapper } from '../styles/HomeStyles'

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
        <HomeWrapper key={id}>
            <p>{email}</p>
            {messages && messages.map(message => <Chirp message={message} />)}
            <div style={{maxWidth: '550px', display: 'flex', flexWrap: 'wrap', margin: '1% auto'}}>
                {colors && colors.map(el => <div style={{height: '100px', width: "100px", background: el, margin: '10px 5px'}}></div>)}
            </div>
        </HomeWrapper>
    ))
}

export default Home