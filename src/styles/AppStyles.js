import styled from 'styled-components'

export const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* display: flex;
    justify-content: space-around; */
    @media screen and (max-width: 500px) {
        grid-template-columns: 150px 1fr;
        /* grid-template-columns: 100px, 1fr; */
        /* nav {
            max-width: 100px
        } */
    }
`