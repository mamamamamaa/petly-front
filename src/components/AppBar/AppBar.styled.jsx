import styled from '@emotion/styled';
import { media } from "../Layout/Layout.styled";


export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px 42px 20px;
    margin: 0 auto;
    outline: 1px solid red;
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
    /* opacity: 0;
    visibility: hidden; */
    pointer-events: none;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};
`;

export const MenuContainer = styled.div`
    /* visibility: hidden; */
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    position: relative;
    padding-top: 104px;
    /* height: 100%; */
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
`;

// export const MenuIcon = styled.svg`
    

//         /* */
//         width: 30px;
//         height: 20px;
//         outline: 1px solid red;
// `;



