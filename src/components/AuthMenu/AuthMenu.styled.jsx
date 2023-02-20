import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from "../Layout/Layout.styled";
import { theme } from '../../utils';


export const User = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  margin: 0;
`;
export const Button = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.primary};
  border-radius: 40px;
  background: ${theme.colors.accentText};
  color: ${theme.colors.titleText};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :last-child {
    margin-left: 20px;
  }
  :hover,
  :focus {
    // background-color: ${theme.colors.primary};
    // color: ${theme.colors.accentText};
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  ${media.mobile} {
    height: 35px;
    :last-child {
      margin-left: 12px;
    }
  }
`;

export const NavigLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  padding: 10px 28px;
  text-decoration: none;
  &.active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.accentText};
    border-radius: 40px;
  }
  ${media.mobile} {
    padding: 8px 28px;
  }
`;

export const Sp = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  font-family: ${theme.fonts.body};
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: 0.04em;
  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
  ${media.tabletAndDesktop} {
    font-size: 20px;
    line-height: 27px;
  }
`;