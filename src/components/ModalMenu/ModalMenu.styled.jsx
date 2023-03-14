import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'components/Layout/Layout.styled';
import { theme } from '../../utils/theme';

export const Overlay = styled.div`
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #fdf7f2;
  z-index: 20;
  overflow: auto;
`;
export const ModalWindow = styled.div`
  background-color: #fdf7f2;
  position: absolute;
  padding: 30px;
  z-index: 20;
`;

export const ModalLogo = styled.span`
  color: ${theme.colors.titleText};
  font-family: ${theme.fonts.heading};
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.07em;
  z-index: 21;
  position: absolute;
  ${media.mobile} {
    font-size: 28px;
    line-height: 42px;
    top: 16px;
    left: 20px;
  }
  ${media.tablet} {
    font-size: 32px;
    line-height: 48px;
    top: 24px;
    left: 32px;
  }
`;

export const LogoAccent = styled.span`
  color: ${theme.colors.primary};
`;

export const ModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 30;
  ${media.mobile} {
    top: 16px;
    right: 20px;
  }
  ${media.tablet} {
    top: 24px;
    right: 32px;
  }
`;

export const HomePageLink = styled(NavLink)`
  color: inherit;
`;
