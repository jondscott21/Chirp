import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { colors } from '../styles/colors'
import Chirp from './Chirp'
import { HomeWrapper, ChirpInput } from '../styles/HomeStyles'

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
    
    return (
        <div>
            <div>
                <img src='' alt='' />
                <form>
                    <ChirpInput type='text' name='message' placeholder="What's happening?" />
                </form>
            </div>
            {data.users.map(({ id, email, messages }) =>
                <HomeWrapper key={id}>
                    <p>{email}</p>
                    {messages && messages.map(message => <Chirp message={message} />)}
                    
                </HomeWrapper>
            )}
        </div>
    )
}

export default Home