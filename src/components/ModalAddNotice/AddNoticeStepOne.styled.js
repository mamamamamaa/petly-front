import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import { Form } from 'formik';

export const AddNoticeStepOneForm = styled(Form)`
  width: 280px;
  ${media.tabletAndDesktop} {
    width: 608px;
  }
`;

export const AddNoticeStepOneTitle = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  margin-bottom: 20px;
  ${media.tabletAndDesktop} {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
`;
export const AddNoticeStepOneText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
  ${media.tabletAndDesktop} {
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 28px;
  }
`;

export const AddNoticeStepOneTopBtnsWrapper = styled.div`
  margin-bottom: 32px;
  ${media.tabletAndDesktop} {
    width: 383px;
    margin-bottom: 28px;
  }
`;

export const AddNoticeLostFound = styled.button`
  width: 131px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${props => (props.defaultChecked ? '#ffffff' : '#000000')};
  background-color: ${props => (props.defaultChecked ? '#f59256' : '#ffffff')};
  margin-right: 8px;
  margin-bottom: 12px;
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tabletAndDesktop} {
    width: 162px;
    height: 47px;
    margin-right: 12px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 27px;
  }
`;
export const AddNoticeInGoodHands = styled.button`
  width: 155px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${props => (props.defaultChecked ? '#ffffff' : '#000000')};
  background-color: ${props => (props.defaultChecked ? '#f59256' : '#ffffff')};
  margin-right: 8px;
  margin-bottom: 12px;
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tabletAndDesktop} {
    width: 197px;
    height: 47px;
    margin-right: 12px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 27px;
  }
`;
export const AddNoticeSell = styled.button`
  width: 81px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${props => (props.defaultChecked ? '#ffffff' : '#000000')};
  background-color: ${props => (props.defaultChecked ? '#f59256' : '#ffffff')};
  margin-right: 8px;
  margin-bottom: 12px;
  &:active {
    background-color: #f59256;
    color: #ffffff;
  }
  ${media.tabletAndDesktop} {
    width: 91px;
    height: 47px;
    margin-right: 12px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 27px;
  }
`;
export const AddNoticeStepOneButtonSpan = styled.span``;
export const AddNoticeStepOneLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  ${media.tabletAndDesktop} {
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
  ${media.tabletAndDesktop} {
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
  ${media.tabletAndDesktop} {
    height: 48px;
    padding-left: 16px;
    padding-top: 11px;
    padding-bottom: 10px;
  }
`;

export const AddNoticeStepOneButtonNextCancelWrapper = styled.div`
  ${media.tabletAndDesktop} {
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
  ${media.tabletAndDesktop} {
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
  ${media.tabletAndDesktop} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
`;
