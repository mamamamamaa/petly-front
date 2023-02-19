import styled from '@emotion/styled';
// import { media } from 'components/Layout/Layout.styled';

// export const ModalAddNoticeWrapper = styled.div`
//   width: 280px;
//   margin: 40px 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   ${media.tabletAndDesktop} {
//     width: 608px;
//     margin: 40px 80px;
//   }
// `;

// export const ModalAddNoticeTitle = styled.h3`
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 33px;
//   color: #111111;
//   margin-bottom: 20px;
//   ${media.tabletAndDesktop} {
//     font-weight: 600;
//     font-size: 36px;
//     line-height: 49px;
//     color: #000000;
//   }
// `;
// export const ModalAddNoticeText = styled.p`
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22px;
//   text-align: center;
//   letter-spacing: -0.01em;
//   color: #111111;
//   margin-bottom: 20px;
//   ${media.tabletAndDesktop} {
//     font-size: 20px;
//     line-height: 27px;
//     color: #000000;
//     margin-bottom: 28px;
//   }
// `;
// ===================
import { Field, ErrorMessage, Form } from 'formik';
import { theme } from '../../utils/theme';
import { MdMale } from 'react-icons/md';
import { MdFemale } from 'react-icons/md';
import { TfiPlus } from 'react-icons/tfi';

export const Container = styled.div`
  background-color: ${theme.colors.white};
  padding: 18px;
  width: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;

  top: 0;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    width: 608px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: ${theme.colors.mainBackground}; */
  border: 2px solid ${theme.colors.white};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover,
  &:focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;

export const IconMale = styled(MdMale)`
  fill: #23c2ef;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 767px) {
    width: 90px;
    height: 90px;
  }
`;

export const IconFemale = styled(MdFemale)`
  fill: #ff8787;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 767px) {
    width: 90px;
    height: 90px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 3rem;
  }
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 443px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const ButtonFill = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 2px solid ${theme.colors.accent};
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: none;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 0.02857em;
  max-width: 240px;
  height: 40px;
  padding: 10px 28px;
  border-radius: 40px;
  width: 100%;
  color: ${theme.colors.white};
  border-color: ${theme.colors.accent};
  background-color: ${theme.colors.accent};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(245, 97, 1);
    color: ${theme.colors.white};
    border-color: #ff6101;
    background-color: #ff6101;
  }
  @media screen and (min-width: 767px) {
    max-width: 180px;
    height: 44px;
    margin-left: 20px;
  }
`;

export const ButtonEmpty = styled.button`
  max-width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.accent};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  cursor: pointer;
  outline: none;
  color: ${theme.colors.dark};
  border-color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(245, 97, 1);
    color: ${theme.colors.white};
    border-color: #ff6101;
    background-color: #ff6101;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormFirst = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 448px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const FormSecond = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 16px;
  @media screen and (min-width: 767px) {
    margin-top: 12px;
    margin-bottom: 28px;
  }
`;

export const InputWrapperLast = styled.div`
  position: relative;
  margin-bottom: 40px;
  margin-top: 8px;
  @media screen and (min-width: 767px) {
    margin-top: 12px;
  }
`;

export const Input = styled(Field)`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.6rem;
  width: 240px;
  height: 40px;

  background-color: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.brightAccent};
  }
  &::placeholder {
    font-size: 14px;
    color: ${theme.colors.gray};
  }
  @media screen and (min-width: 767px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 767px) {
    width: 448px;
    height: 48px;
  }
`;

export const InputLast = styled(Field)`
  width: 240px;
  height: 40px;
  background-color: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.brightAccent};
  }
  &::placeholder {
    font-size: 14px;
    color: ${theme.colors.gray};
  }
  @media screen and (min-width: 767px) {
    width: 448px;
    height: 48px;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  @extend .error_text_size;
  position: absolute;
  top: 32%;
  right: 4%;
  color: red;
`;

export const ErrorTextarea = styled(ErrorMessage)`
  @extend .error_text_size;
  position: absolute;
  bottom: 10%;
  right: 4%;
  color: red;
`;

export const InputPhoto = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const AvatarImg = styled.img`
  min-width: 182px;
  min-height: 182px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: 40px;

  @media screen and (min-width: 767px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ButtonAddPhoto = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  background: ${theme.colors.mainBackground};
  border-radius: 20px;
  margin-bottom: 28px;
  margin-top: 12px;
  border: 2px solid ${theme.colors.mainBackground};
  overflow: hidden;
  &:hover,
  &:focus {
    border: 2px solid ${theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const CrossBig = styled.div`
  position: absolute;
  color: #11111199;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.6rem;

  @media screen and (min-width: 767px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.08;
  }
`;

export const WraperTextarea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
`;

export const Textarea = styled(Field)`
  padding: 12px;
  width: 100%;
  height: 100px;
  background: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.accent};
  border-radius: 20px;
  margin-top: 8px;
  outline: none;
  resize: none;
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.brightAccent};
  }
  @media screen and (min-width: 768px) {
    height: 116px;
    margin-top: 12px;
  }
`;

export const RadioWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1280px) {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const LabelRadioBtn = styled.label`
  font-size: 14px;
  padding: 10px 28px;
  text-decoration: none;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  align-items: center;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 12px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  &.active,
  :hover,
  :focus {
    background-color: ${theme.colors.brightAccent};
    border-color: ${theme.colors.brightAccent};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

export const RadioBtn = styled(Field)`
  display: none;

  :checked + label {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
`;

export const LabelRadioSexBtn = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  // margin-bottom: 12px;
  // padding: 10px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }

  &.active,
  :hover,
  :focus {
    color: ${theme.colors.accent};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const RadioSexBtn = styled(Field)`
  display: none;

  :checked + label {
    color: ${theme.colors.accent};
  }
`;

export const SpanStar = styled.span`
  color: ${theme.colors.accent};
`;

export const AddImg = styled(TfiPlus)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
`;
