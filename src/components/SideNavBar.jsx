import React from 'react'
import { NavWrapper, StyledNavLink, LinkWrapper } from '../styles/NavBarStyles'


const NavBar = (props) => {
    return (
        <NavWrapper>
            <div>Icon</div>
            <LinkWrapper><StyledNavLink to='/home'>Home</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/explore'>Explore</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/notifications'>Notifications</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/messages'>Messages</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/bookmarks'>Bookmarks</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/lists'>Lists</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/profile'>Profile</StyledNavLink></LinkWrapper>
            <LinkWrapper><StyledNavLink to='/m'>More</StyledNavLink></LinkWrapper>
        </NavWrapper>
    )
}

export default NavBar