import styled from '@emotion/styled';
import { Form, Field } from 'formik';
// import adver from 'utils/svg/adv.svg';
import { theme } from 'utils/theme';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Wraper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 28px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 28px;
  }
`;

export const BoxWarning = styled.span`
  color: red;
  font-weight: 400;
  font-size: 12px;
`;

export const FormEl = styled(Form)``;

export const BoxLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Input = styled(Field)`
  margin: 0;
  height: 26px;
  font-family: Manrope;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  background-color: #fdf7f2;
  outline: none;
  border: 1px solid #f59256;
  border-radius: 40px;
  @media screen and (max-width: 767px) {
    margin-top: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const InputSelect = styled(Field)`
  font-family: Manrope;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  background-color: #fdf7f2;
  outline: none;
  border: 1px solid #f59256;
  border-radius: 40px;
  @media screen and (max-width: 767px) {
    height: 48px;
    margin-top: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 48px;
    margin-top: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const BoxButton = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: ${theme.colors.primary};
  background: ${theme.colors.accentText};
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (max-width: 767px) {
    height: 40px;
    width: 240px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 44px;
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 180px;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 180px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: white;
  background: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
  @media screen and (max-width: 767px) {
    height: 40px;
    width: 240px;
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 44px;
    width: 180px;
  }
  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 180px;
  }
`;
