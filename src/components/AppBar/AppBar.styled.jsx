import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";


export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 16px 20px 42px 20px; */
    padding-bottom: 46px;
    /* padding-top: 16px; */
    margin: 0 auto;
    outline: 1px solid red;
    /* position: fixed; */
    ${media.tablet} {

    }
`;

export const LogoBlack = styled.span`
    color: ${props => props.theme.colors.titleText};
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.07em;
    z-index: 101;
`;

export const LogoAccent = styled.span`
    color: ${props => props.theme.colors.primary};
`;

export const MenuWrpr = styled.div`
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};
    opacity: ${({ isClosed }) => isClosed ? 0 : 1};
    visibility: ${({ isClosed }) => isClosed ? 'hidden' : 'visible'};
    pointer-events:  ${({ isClosed }) => isClosed ? 'none' : 'auto'};
    ${media.tablet} {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        position: static;

    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding-top: 104px;
    /* height: 100%; */
    ${media.tablet} {
        flex-direction: row;
        padding-top: 0;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: ${props => props.theme.colors.secondary};
    }
`;


export const Nav = styled.nav`
    ${media.tablet} {
        /* display: flex; */
        position: relative;
        margin-top: 160px;
        opacity: ${({ isClosed }) => isClosed ? 0 : 1};
        visibility: ${({ isClosed }) => isClosed ? 'hidden' : 'visible'};
        pointer-events:  ${({ isClosed }) => isClosed ? 'none' : 'auto'};
    }
    /* text-align: center; */
`;

export const UserMenuWrpr = styled.div`
    
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
    z-index: 101;
    ${media.desktop} {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }
`;

// export const MenuIcon = styled.svg`
    

//         /* */
//         width: 30px;
//         height: 20px;
//         outline: 1px solid red;
// `;



