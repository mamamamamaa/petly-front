import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { media } from 'components/Layout/Layout.styled';

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
`;
export const AddNoticeStepOneLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
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
  padding: 0 15px;
`;
export const AddNoticeStepOneSelect = styled.select`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
