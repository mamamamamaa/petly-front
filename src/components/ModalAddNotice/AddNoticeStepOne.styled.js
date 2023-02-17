import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
export const AddNoticeStepOneButton = styled.button`
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
  background-color: #ffffff;
  margin-right: 8px;
  margin-bottom: 12px;
  &:nth-of-type(3) {
    margin-right: 0;
    margin-bottom: 32px;
  }
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tablet} {
    padding: 10px 28px;
    margin-right: 12px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 27px;
    &:nth-of-type(3) {
      margin-right: 0;
      margin-bottom: 28px;
    }
  }
`;
export const AddNoticeStepOneLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  ${media.tablet} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
`;
export const AddNoticeStepOneInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding-left: 14px;
  padding-right: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
  }
  ${media.tablet} {
    height: 48px;
    padding-left: 16px;
    padding-top: 11px;
    padding-bottom: 10px;
    margin-bottom: 28px;
    &::placeholder {
      font-size: 16px;
      line-height: 26px;
      color: rgba(17, 17, 17, 0.6);
    }
  }
`;
export const AddNoticeStepOneSelect = styled.select`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 40px;
  padding-left: 14px;
  padding-right: 20px;
  ${media.tablet} {
    height: 48px;
    padding-left: 16px;
    padding-top: 11px;
    padding-bottom: 10px;
    margin-bottom: 40px;
`;
export const AddNoticeStepOneButtonNextCancelWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const AddNoticeStepOneButtonNext = styled.button`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tablet} {
    margin-bottom: 0;
    width: 180px;
    height: 44px;
  }
`;
export const AddNoticeStepOneButtonCancel = styled.button`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tablet} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
`;
