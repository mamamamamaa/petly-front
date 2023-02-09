import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";


// export const Nav = styled.nav`
    
//     /* text-align: center; */
// `;

export const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    ${media.tablet} {
        opacity: ${({ isClosed }) => isClosed ? 0 : 1};
        visibility: ${({ isClosed }) => isClosed ? 'hidden' : 'visible'};
        pointer-events:  ${({ isClosed }) => isClosed ? 'none' : 'auto'};
        padding-top: 160px;
    }
    ${media.desktop} {
        flex-direction: row;
        padding-top: 0;
        justify-content: space-between;
    }
`;

export const NavListItem = styled.li`
    color: ${props => props.theme.colors.navText};
    margin-bottom: 40px;
    :hover,
    :focus{
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
    };
    ${media.tablet} {
            margin-bottom: 60px;
        };
    ${media.desktop} {
       margin-bottom: 0;
       margin-left: 80px;
       :first-child{
        margin-left: 0;
       };
    };
`;

export const NavigLink = styled(NavLink)`
    font-family: Manrope;
    color: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-decoration: none;
    /* :active {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
    }; */
    ${media.tablet} {
        font-size: 48px;
        line-height: 66px;
    }
    ${media.desktop} {
        font-size: 20px;
        line-height: 27px;
    }
`;