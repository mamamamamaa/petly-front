import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { media } from 'components/Layout/Layout.styled';

export const AddNoticeStepOneButton = styled.button`
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-right: 8px;
  margin-bottom: 12px;
  &:nth-child(3) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;
export const AddNoticeStepOneSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  letter-spacing: 0.04em;
  color: #000000;
`;
export const AddNoticeStepOneLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
`;
export const AddNoticeStepOneBtnSell = styled.div``;
