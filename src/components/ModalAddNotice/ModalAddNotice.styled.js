import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { media } from 'components/Layout/Layout.styled';

export const ModalAddNoticeWrapper = styled.div`
  width: 280px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalAddNoticeTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  margin-bottom: 20px;
`;
export const ModalAddNoticeText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;
