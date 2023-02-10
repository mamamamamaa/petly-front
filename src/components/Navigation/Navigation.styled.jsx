import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";


export const NavList = styled.ul`
    margin: 0;
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
    font-family: ${props => props.theme.fonts.body};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeights.normal};
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: ${props => props.theme.colors.navText};
    :hover,
    :focus{
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        font-weight: 700;
    };
    ${media.mobile} {
        font-size: 32px;
        line-height: 44px;
        margin-bottom: 40px;
        :last-of-type{
            margin-bottom: 0;
        }
    }
    ${media.tablet} {
        font-size: 48px;
        line-height: 66px;
        margin-bottom: 60px;
        :last-of-type{
            margin-bottom: 0;
        }
    };
    ${media.desktop} {
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 0;
        margin-left: 80px;
       :first-of-type{
            margin-left: 0;
       };
    };
`;

export const NavigLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    &.active {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
    };
    /* ${media.tablet} {
        font-size: 48px;
        line-height: 66px;
    }
    ${media.desktop} {
        font-size: 20px;
        line-height: 27px;
    } */
`;