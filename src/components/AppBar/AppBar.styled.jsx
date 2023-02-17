import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";
import { theme } from '../../utils/theme';
import { NavLink } from 'react-router-dom';


export const BarContainer = styled.div`
    font-family: ${theme.fonts.body};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    ${media.mobile} {
        padding-top: 16px;
    };
    ${media.tablet} {
        padding-top: 24px;
    };
    ${media.desktop} {
        padding-top: 20px;
    };
    /* outline: 1px solid red; */
`;

export const LogoBlack = styled.span`
    color: ${theme.colors.titleText};
    font-family: ${theme.fonts.heading};
    font-style: normal;
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: 0.07em;
    z-index: 21;
    ${media.mobile} {
        font-size: 28px;
        line-height: 42px;
    }
    ${media.tabletAndDesktop} {
        font-size: 32px;
        line-height: 48px;
    }
`;

export const LogoAccent = styled.span`
    color: ${theme.colors.primary};
`;

export const TabletWrapper = styled.div`
        ${media.tablet} {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ${media.desktop} {
            justify-self: flex-end;
            display: flex;
        }  
`;


export const MenuWrpr = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    z-index: 20;
    position: fixed;
    left: 0;
    top: 0;
    /* width: 100%; */
    height: 100%;
    background-color: ${theme.colors.secondary};
    opacity: ${({ isClosed }) => isClosed ? 0 : 1};
    visibility: ${({ isClosed }) => isClosed ? 'hidden' : 'visible'};
    pointer-events:  ${({ isClosed }) => isClosed ? 'none' : 'auto'};
    ${media.mobile} {
        padding-top: 104px;
        width: 100vw;
    }
    ${media.tablet} {
        margin-right: 25px;
        /* width: auto; */
        /* width: 100%; */
    }
    ${media.tabletAndDesktop} {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        position: static;
        background-color: inherit;
        /* outline: 1px solid blue; */
        width: auto;
        height: auto;
        padding-top: 0;
    }
    ${media.desktop} {
        margin-left: 80px;
        justify-self: flex-end;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-width: 1074px;
    }
`;

export const Nav = styled.nav`
    ${media.mobile} {
        margin-top: 60px;
    }
    ${media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${({ isClosed }) => isClosed ? 0 : 1};
        visibility: ${({ isClosed }) => isClosed ? 'hidden' : 'visible'};
        pointer-events:  ${({ isClosed }) => isClosed ? 'none' : 'auto'};
        margin: 0, auto;
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        /* width: 100%; */
        height: 100%;
        width: 100%;
        background-color: ${theme.colors.secondary};
        /* outline: 1px solid green; */
        ${media.desktop} {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            position: static;
            background-color: inherit;
            /* outline: 1px solid orange; */
            width: auto;
            height: auto;
        }
    } 
`;

export const UserMenuWrpr = styled.div`
    ${media.mobile} {
        display: flex;
        justify-content: center;
    }
    ${media.tablet} {
        padding-top: 0;
        align-self: flex-end;
    }
`;

export const BurgerBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 21;
    ${media.tablet} {
        order: +1;
    }
    ${media.desktop} {
        display: none;
    }
`;

export const HomePageLink = styled(NavLink)`
    color: inherit;
`;




