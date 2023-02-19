import styled from "@emotion/styled";
import { NavLink} from "react-router-dom";
import { media } from "../Layout/Layout.styled";
import { theme } from "../../utils/theme.jsx";
import { Field, Form } from "formik";
import mobileBackground from '../../images/mobile/log-registr-mobile.png';
import tabletBackground from '../../images/tablet/log-registr-tablet.png';
import desktopBackground from '../../images/desktop/log-registr-desktop.png';

export const Section = styled.section`
  /* background-image: url(${mobileBackground});
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet} {
    background-image: url(${tabletBackground});
    background-size: contain;
    background-position: bottom 0 left 50%;
  };
  ${media.desktop} {
    background-image: url(${desktopBackground});
    background-size: contain;
    min-height: 100vh;
  } */
`;

export const Container = styled.div`
  padding-top: 42px;
  background-image: url(${mobileBackground});
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  height: calc(100vh - 68px);
  ${media.tablet} {
    padding-top: 204px;
    padding-bottom: 266px; 
    background-image: url(${tabletBackground});
    height: calc(100vh - 71px);
  }
  ${media.desktop} {
    padding-top: 80px;
    background-image: url(${desktopBackground});
  }
`;

export const FormLogin = styled(Form)`
  width: 280px;
  padding-inline: 0px;
  padding-bottom: 0px;
  background-color: transparent;
  margin-inline: auto;
  box-sizing: border-box;
  ${media.tablet} {
    width: 608px;
    padding: 60px 80px 40px 80px;
    background-color: ${theme.colors.accentText};
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  ${media.desktop} {
    width: 618px;
    padding: 60px 80px;
    background-color: ${theme.colors.accentText};
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-family: 'Manrope';
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  color: ${theme.colors.black};
  ${media.tablet} {
    font-weight: ${theme.fontWeights.normal};
    font-size: 36px;
  }
`;

export const FieldLogin = styled.div`
  margin-bottom: 16px;
`;
export const FieldPass = styled.div`
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 14px;
  font-family: 'Manrope';
  font-weight: ${theme.fontWeights.news};
  font-size: 14px;
  line-height: 1.3;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  background: transparent;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  &::placeholder {
    font-style: normal;
    font-weight: ${theme.fontWeights.news};
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: ${theme.colors.gray};
  }
  :hover,
  :focus {
    border: 2px solid ${theme.colors.primary};
    outline: 0;
  }
  ${media.tablet} {
    height: 52px;
    padding-left: 32px;
    font-size: 18px;
    line-height: 1.38;
    background: ${theme.colors.secondary};
    &::placeholder {
      font-style: normal;
      font-weight: ${theme.fontWeights.news};
      font-size: 18px;
      line-height: 1.38;
      letter-spacing: 0.04em;
      color: ${theme.colors.gray};
    }
  }
  ${media.desktop} {
    height: 52px;
    padding-left: 32px;
    font-size: 18px;
    line-height: 1.38;
    background: ${theme.colors.secondary};
    &::placeholder {
      font-style: normal;
      font-weight: ${theme.fontWeights.news};
      font-size: 18px;
      line-height: 1.38;
      letter-spacing: 0.04em;
      color: ${theme.colors.gray};
    }
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 280px;
  height: 44px;
  padding: 10px 28px;
  margin-bottom: 40px;
  border: none;
  border-radius: 40px;
  color: ${theme.colors.accentText};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  font-family: 'Manrope';
  font-weight: ${theme.fontWeights.normal};
  font-size: 20px;
  line-height: 1.35px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    /* color: ${theme.colors.black};
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.accentText}; */
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
  ${media.tablet} {
    width: 458px;
  }
  ${media.desktop} {
    width: 458px;
    height: 48px;
  }
`;

export const Text = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${theme.fontWeights.news};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.gray};
`;

export const StyledLink = styled(NavLink)`
  color: ${theme.colors.blue};
  text-decoration: none;
  transition: color ${theme.colors.background};
  :hover,
  :focus {
    color: ${theme.colors.primary};
  }
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #e53e3e;
`;

export const FieldWrap = styled.div`
  position: relative;
`;

export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 16px;
  height: 16px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
  ${media.tabletAndDesktop} {
    width: 22px;
    height: 22px;
    right: 32px;
  }
`;