import styled from '@emotion/styled';
import { media } from '../Layout/Layout.styled';
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
    overflow-y: scroll;
  }
  ${media.tablet} {
    padding-top: 24px;
  }
  ${media.desktop} {
    padding-top: 20px;
  }
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
  background-color: ${theme.colors.secondary};
  /* background-color: blueviolet; */
  opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
  visibility: ${({ isClosed }) => (isClosed ? 'hidden' : 'visible')};
  pointer-events: ${({ isClosed }) => (isClosed ? 'none' : 'auto')};
  /* outline: 1px solid blue; */
  ${media.mobile} {
    padding-top: 104px;
    padding-bottom: 40px;
    width: 100vw;
    min-height: 100vh;
    z-index: 20;
    position: absolute;
    left: 0;
    top: 0;
    justify-content: flex-end;
    /* align-items: stretch; */
    /* position: fixed; */
  }
  ${media.tablet} {
    margin-right: 25px;
  }
  ${media.tabletAndDesktop} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    background-color: inherit;
    /* outline: 1px solid blue; */
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
    justify-content: space-between;
    min-width: 1073px;
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
    opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
    display: ${({ isClosed }) => (isClosed ? 'none' : 'auto')};
    pointer-events: ${({ isClosed }) => (isClosed ? 'none' : 'auto')};
    margin: 0, auto;
    z-index: 20;
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 60px;
    min-height: 100vh;
    padding-top: 160px;
    width: 100%;
    background-color: ${theme.colors.secondary};
    /* outline: 1px solid green; */
    ${media.desktop} {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      position: static;
      background-color: inherit;
      outline: 1px solid orange;
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


// export const HeaderStyled = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media (min-width: 1280px) {
//     align-items: baseline;
//   }
// `;