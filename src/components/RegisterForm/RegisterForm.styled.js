import styled from '@emotion/styled';
import { media } from '../Layout/Layout.styled';
import { theme } from '../../utils';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
// import MaskedInput from 'react-text-mask';
import mobileBackground from '../../images/mobile/wave.svg';
import tabletBackground from '../../images/tablet/wave.svg';
import desktopBackground from '../../images/desktop/huge-part-of-wave.svg';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${mobileBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  ${media.tabletAndDesktop} {
    background-image: url(${tabletBackground});
    padding-top: 184px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  ${media.desktop} {
    background-image: url(${desktopBackground});
    padding-top: 50px;
    padding-bottom: 147px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: 40px;
  margin-top: 0;
  ${media.tabletAndDesktop} {
    font-size: 36px;
    font-weight: ${theme.fontWeights.normal};
  }
`;

export const Form1 = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 40px;
  margin: 0 auto;
  ${media.tabletAndDesktop} {
    width: 608px;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: ${theme.colors.accentText};
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0 rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 7px 4px 14px 0 rgba(0, 0, 0, 0.11);
    box-shadow: 7px 4px 14px 0 rgba(0, 0, 0, 0.11);
  }
  ${media.desktop} {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
  :last-child {
    font-size: 12px;
  }
`;

export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 15px;
  top: 13px;
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  font-weight: ${theme.fontWeights.news};
  color: ${theme.colors.black};
  background: ${theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    border: 2px solid ${theme.colors.primary};
    outline: 0;
  }
  ${media.tabletAndDesktop} {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  ${media.desktop} {
    width: 458px;
  }
`;

export const PhoneInput = styled(Field)`
  width: 280px;
  padding: 11px 0 12px 14px;
  background: ${theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    border: 2px solid ${theme.colors.primary};
    outline: 0;
  }
  ${media.tabletAndDesktop} {
    width: 448px;
    padding: 14px 0 13px 32px;
    font-size: 18px;
  }
  ${media.desktop} {
    width: 458px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: ${theme.colors.accentText};
  background: ${theme.colors.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 24px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
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
  ${media.tabletAndDesktop} {
    width: 458px;
    font-size: 20px;
  }
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #000;
  background: ${theme.colors.accentText};
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
  margin: -26px 0 40px 0;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
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
      rgba(245, 146, 86, 0.9),
      transparent
    );
    transition: all 650ms;
  }
  ${media.tabletAndDesktop} {
    width: 458px;
    font-size: 20px;
  }
`;

export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0;
  left: 15px;
  color: red;
  font-size: 14px;
  font-style: italic;
  ${media.tabletAndDesktop} {
    left: 33px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.blue};
  transition: color ${theme.colors.background};
  :hover,
  :focus {
    color: ${theme.colors.primary};
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
