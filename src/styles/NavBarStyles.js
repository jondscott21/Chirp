import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavWrapper = styled.nav`
    color: white;
    font-size: 1.9rem;
    display: flex;
    flex-direction: column;
    /* @media screen and (max-width: 500px) {
        max-width: 100px;
    } */
`
export const LinkWrapper = styled.div`
    padding: 30px 10px;
`
export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 1.9rem;
`