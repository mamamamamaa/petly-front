import styled from '@emotion/styled';
import { media } from 'components/Layout/Layout.styled';
import male from 'utils/svg/male.svg';
import female from 'utils/svg/female.svg';
import loadCross from 'utils/svg/loadCross.svg';
import PetDeleteIcon from 'utils/svg/petDeleteIcon.svg';

export const AddNoticeStepTwoForm = styled.form``;
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
export const AddNoticeStepTwoGenderText = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 18px;
  &::after {
    content: '*';
    color: #f59256;
  }
  ${media.tabletAndDesktop} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 31px;
  }
`;
export const AddNoticeStepTwoGenderWrapper = styled.div`
  margin-bottom: 32px;
  ${media.tabletAndDesktop} {
    margin-bottom: 40px;
  }
`;
export const AddNoticeStepTwoInputGenderRadio = styled.input`
  display: none;
`;
export const AddNoticeStepTwoMaleWrapper = styled.label`
  display: inline-flex;
  flex-direction: column;
`;
export const AddNoticeStepTwoMale = styled.img`
  display: block;
  content: url(${male});
  width: 40px;
  height: 40px;
  margin-right: 40px;
  margin-bottom: 14px;
`;
export const AddNoticeStepTwoMaleSpan = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${({ isDisabled, gender }) => {
    if (isDisabled) {
      return '#000';
    }
    if (gender === 'male') {
      return '#f59256';
    }
    return '#000';
  }};
`;
export const AddNoticeStepTwoFemaleWrapper = styled.label`
  display: inline-flex;
  flex-direction: column;
`;
export const AddNoticeStepTwoFemale = styled.img`
  display: block;
  content: url(${female});
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
`;
export const AddNoticeStepTwoFemaleSpan = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${({ isDisabled, gender }) => {
    if (isDisabled) {
      return '#000';
    }
    if (gender === 'female') {
      return '#f59256';
    }
    return '#000';
  }};
`;

export const AddNoticeStepTwoLabelLocation = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  &::after {
    content: '*';
    color: #f59256;
  }
  ${media.tabletAndDesktop} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
`;
export const AddNoticeStepTwoInputLocationWrapper = styled.div`
  margin-bottom: 16px;
  ${media.tabletAndDesktop} {
    margin-bottom: 28px;
  }
`;
export const AddNoticeStepTwoInputLocation = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
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
  }
`;

export const AddNoticeStepTwoLabelPrice = styled.label`
  display: ${props => (props.selectedOption === 'sell' ? 'block' : 'none')};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  &::after {
    content: '*';
    color: #f59256;
  }
  ${media.tabletAndDesktop} {
    font-size: 24px;
    color: #000000;
    margin-bottom: 12px;
  }
`;
export const AddNoticeStepTwoInputPriceWrapper = styled.div`
  display: ${props => (props.selectedOption === 'sell' ? 'block' : 'none')};
  margin-bottom: 16px;
  ${media.tabletAndDesktop} {
    margin-bottom: 28px;
  }
`;
export const AddNoticeStepTwoInputPrice = styled.input`
  display: ${props => (props.selectedOption === 'sell' ? 'block' : 'none')};
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
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
  }
`;
export const AddNoticeStepTwoSliderContainer = styled.div`
  ${media.tabletAndDesktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const AddNoticeStepTwoSlide = styled.div`
  position: relative;
  margin-bottom: 4px;
  ${media.tabletAndDesktop} {
    margin-right: 4px; // add some space between the images
  }
`;
export const AddNoticeStepTwoImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  ${media.tabletAndDesktop} {
    width: 116px;
    height: 116px;
  }
`;
export const AddNoticeStepTwoButtonDelImg = styled.button`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 16px;
  background-image: url(${PetDeleteIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0vw left 0vw;
  cursor: pointer;
  border: none;
  &::after {
    content: '';
    display: block;
    width: 44px;
    height: 44px;
  }
`;
export const AddNoticeStepTwoLabelPictureURL = styled.label`
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
export const AddNoticeStepTwoLoadImageInputWarningWrapper = styled.div`
  display: flex;
`;
export const AddNoticeStepTwoLoadImageInputWrapper = styled.div`
  width: 116px;
  height: 116px;
  background-color: #fdf7f2;
  background-size: 47px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ preview }) =>
    preview ? `url(${preview[0]})` : `url(${loadCross})`};
  background-image: url(${loadCross});
  left: 20px;
  margin-bottom: 28px;
  ${media.tabletAndDesktop} {
    width: 140px;
    height: 140px;
  }
`;
export const AddNoticeStepTwoLoadImageInput = styled.input`
  // position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const AddNoticeStepTwoLabelComments = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #111111;
  margin-bottom: 8px;
  ${media.tabletAndDesktop} {
    display: none;
  }
`;

export const AddNoticeStepTwoLabelCommentArea = styled.label`
  ${media.mobile} {
    display: none;
  }
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #000000;
`;
export const AddNoticeStepTwoCommentWrapper = styled.div`
  ${media.tabletAndDesktop} {
    display: none;
  }
  margin-bottom: 40px;
`;
export const AddNoticeStepTwoCommentAreaWrapper = styled.div`
  ${media.mobile} {
    display: none;
  }
  margin-bottom: 40px;
`;
export const AddNoticeStepTwoCommentArea = styled.textarea`
  ${media.mobile} {
    display: none;
  }
  width: 100%;
  height: 191px;
  padding: 16px 18px;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
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
  // margin-bottom: 40px;
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
