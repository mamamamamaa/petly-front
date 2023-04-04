import styled from '@emotion/styled';
import { media } from '../Layout/Layout.styled';
import { theme } from '../../utils/theme';
import { NavLink } from 'react-router-dom';

export const BarContainer = styled.div`
  font-family: ${theme.fonts.body};
  display: flex;
  align-items: center;

  margin: 0 auto;
  ${media.mobile} {
    padding-top: 16px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
  }
  ${media.tablet} {
    width: 768px;
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  ${media.desktop} {
    width: 1280px;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;
  }
`;

export const LogoBlack = styled.span`
  color: ${theme.colors.titleText};
  font-family: ${theme.fonts.heading};
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.07em;
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

export const MenuWrpr = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${theme.colors.secondary};
  ${media.mobile} {
    padding-top: 104px;
    padding-bottom: 40px;
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    justify-content: flex-end;
  }
  ${media.tablet} {
    margin-right: 25px;
  }
  ${media.tabletAndDesktop} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    background-color: inherit;
    width: auto;
    height: auto;
    padding-top: 0;
    position: static;
  }
  ${media.desktop} {
    margin-left: 80px;
    z-index: auto;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    /* min-width: 1073px; */
  }
`;

export const Nav = styled.nav`
  ${media.mobile} {
    margin-top: 60px;
  }
  ${media.tablet} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0, auto;
    z-index: 20;
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 60px;
    min-height: 100vh;
    padding-top: 160px;
    width: 100vw;
    background-color: ${theme.colors.secondary};
  };
    ${media.desktop} {
      margin-left: 80px;
      position: static;
      background-color: inherit;
      width: auto;
      height: auto;
    }
`;

export const UserMenuWrpr = styled.div`
  ${media.mobile} {
    display: flex;
    justify-content: center;
  }
  ${media.tablet} {
    padding-top: 0;
    margin-left: auto;
  }
  ${media.desktop} {
    margin-left: auto;
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
    margin-left: 25px;
  }
  ${media.desktop} {
    display: none;
  }
`;

export const HomePageLink = styled(NavLink)`
  color: inherit;
`;

export const Lang = styled.div`
 display: flex; 
`
export const Btn = styled.button`
position: relative;
cursor: pointer;
border: none;
padding: 2px 5px;
margin: 2px;
font-size: 18px;
background-color: transparent;
`
export const Line = styled.span`
content: "";
border-left: 2px solid black;
height: 25px; /* висота лінії */
position: absolute;
left: 100%;
${media.tablet} {
    bottom: 20%;
  }
`

export const ImgBtn = styled.img`

margin: 2px;
`