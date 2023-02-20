import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import male from 'utils/svg/male.svg';
import female from 'utils/svg/female.svg';
import loadCross from 'utils/svg/loadCross.svg';

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
export const AddNoticeStepTwoTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  margin-bottom: 20px;
  text-align: center;
  ${media.tabletAndDesktop} {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
`;
export const AddNoticeStepTwoLabelSex = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 18px;
  ${media.tabletAndDesktop} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 31px;
  }
`;
export const AddNoticeStepTwoInputSexCheckboxWrapper = styled.div`
  width: 100%;
  height: 77px;
  position: relative;
  margin-bottom: 32px;
  ${media.tabletAndDesktop} {
    margin-bottom: 40px;
    height: 107px;
  }
`;
export const AddNoticeStepTwoInputSex = styled.input`
  width: 160px;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0;
  right: 0;
  opacity: 50%;
`;
export const AddNoticeStepTwoMaleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
export const AddNoticeStepTwoMale = styled.img`
  display: block;
  content: url(${male});
  width: 40px;
  height: 40px;
  margin-right: 40px;
  margin-bottom: 12px;
  box-shadow: inset -1px 2px 3px rgba(255, 255, 255, 0.57),
    inset 0px -3px 4px rgba(0, 0, 0, 0.25);
  outline: 1px solid ${props => (props.checked ? '#f59256' : '#ffffff')};
  ${media.tabletAndDesktop} {
    margin-bottom: 23px;
  }
`;
export const AddNoticeStepTwoMaleSpan = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${props => (props.checked ? '#f59256' : '#ffffff')};
`;
export const AddNoticeStepTwoFemaleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
export const AddNoticeStepTwoFemale = styled.img`
  display: block;
  content: url(${female});
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  box-shadow: inset -1px 2px 3px rgba(255, 255, 255, 0.57),
    inset 0px -3px 4px rgba(0, 0, 0, 0.25);
  outline: 1px solid ${props => (props.checked ? '#ffffff' : '#f59256')};
`;
export const AddNoticeStepTwoFemaleSpan = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${props => (props.checked ? '#ffffff' : '#f59256')};
`;

export const AddNoticeStepTwoLabelLocation = styled.label`
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
export const AddNoticeStepTwoLabelPrice = styled.label`
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

export const AddNoticeStepTwoLabelComments = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  ${media.tabletAndDesktop} {
    // font-size: 24px;
    // color: #000000;
    // margin-bottom: 12px;
    display: none;
  }
  // &:nth-of-type(4) {
  //   margin-bottom: 180px;
  // }
`;

export const AddNoticeStepTwoLabelCommentArea = styled.label`
  ${media.mobile} {
    display: none;
  }
`;
export const AddNoticeStepTwoCommentArea = styled.textarea`
  ${media.mobile} {
    display: none;
  }
  width: 448px;
  height: 113px;
  left: 80px;
  top: 807px;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
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
    margin-bottom: 28px;
  }
`;
export const AddNoticeStepTwoInputComments = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 40px;
  padding-left: 14px;
  padding-right: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
  }
  ${media.tabletAndDesktop} {
    display: none;
  }
`;
export const AddNoticeStepTwoLabelPictureURL = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 144px;
  ${media.tabletAndDesktop} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 180px;
  }
`;
export const AddNoticeStepTwoLoadImageInputWrapper = styled.div`
  width: 116px;
  height: 116px;
  background-color: #fdf7f2;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${loadCross});
  position: absolute;
  left: 20px;
  top: 464px;
  ${media.tabletAndDesktop} {
    width: 140px;
    height: 140px;
    top: 600px;
    left: 80px;
  }
`;
export const AddNoticeStepTwoLoadImageInput = styled.input`
  position: relative;
  width: 116px;
  height: 116px;
  opacity: 20%;
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
