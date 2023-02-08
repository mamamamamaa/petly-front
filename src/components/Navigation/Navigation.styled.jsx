import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";


export const Nav = styled.nav`
    
    /* text-align: center; */
`;

export const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`;

export const NavListItem = styled.li`
    color: ${props => props.theme.colors.navText};
    margin-bottom: 40px;
    :hover,
    :focus{
        /* color: ${props => props.theme.colors.primary}; */
        color: #F59256;
        text-decoration: underline;
    };
`;

export const NavigLink = styled(NavLink)`
    color: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-decoration: none;
`;