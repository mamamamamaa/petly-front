import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import male from 'utils/svg/male.svg';
import female from 'utils/svg/female.svg';

export const AddNoticeStepTwoForm = styled.form`
  width: 280px;
  margin: 0 20px 40px 20px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
  ${media.tabletAndDesktop} {
    width: 608px;
    margin: 0 80px 40px 80px;
  }
`;

export const AddNoticeStepTwoLabel = styled.label`
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
export const AddNoticeStepTwoInputSexCheckboxWrapper = styled.div`
  color: ${props => (props.checked ? '#ffffff' : '#000000')};
  // background-color: ${props => (props.checked ? '#f59256' : '#ffffff')};
  background-image: ${props =>
    props.checked ? `url("${male}")` : `url("${female}")`};
  width: 100%;
  height: 240px;
  background-position: center;
  background-size: 60px 60px;
  background-repeat: no-repeat;
  // display: inline-block;
`;
export const AddNoticeStepTwoInputSex = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  // background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding-left: 14px;
  padding-right: 20px;
  &:checked {
    background-color: green;
    position: relative;
  }
  &:checked::before {
    background-color: red;
    content: '2714';
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  }
`;
export const AddNoticeStepTwoInput = styled.input`
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
`;
export const AddNoticeStepTwoButtonBackDoneWrapper = styled.div`
  ${media.tabletAndDesktop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
export const AddNoticeStepOneButtonDone = styled.button`
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
export const AddNoticeStepOneButtonBack = styled.button`
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
