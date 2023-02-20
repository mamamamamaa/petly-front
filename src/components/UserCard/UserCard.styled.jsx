import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { theme } from '../../utils/theme';
import { media } from '../Layout/Layout.styled';

//===========пробная загрузка==========================================

export const Inputav = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;
export const Labelav = styled.label`
  /* border: 1px solid black;
  border-radius: 12px;
  padding: 20px;

  display: flex;
  align-items: center;
  cursor: pointer; */
`;
export const Formav = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  /* z-index: 20; */
`;
export const Imgav = styled.img`
  /* border: 1px dashed gray; */
  width: 233px;
  height: 233px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;
// ======================== for avatar

export const Title = styled.h2`
  font-family: ${theme.fonts.body};
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.black};
  ${media.mobile} {
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;
    margin-bottom: 18px;
  }
  ${media.tablet} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 40px;
  }
  ${media.desktop} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 24px;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.accentText};
  cursor: pointer;
  ${media.mobile} {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 20px;
    min-width: 280px;
    min-height: 537px;
    /* top, right, bottom, left */
    padding: 20px 24px 20px 23px;
  }
  ${media.tablet} {
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    display: flex;
    border-radius: 0px 40px 40px 0px;
    padding: 24px 40px 24px 32px;
    margin-left: -32px;
    margin-right: auto;
    flex-wrap: wrap;
    align-items: center;
  }
  ${media.desktop} {
    max-width: 411px;
    margin-left: -17px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 40px 40px 0px;
    padding: 20px 16px 18px 16px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  ${media.tablet} {
    margin-left: 52px;
  }
  ${media.desktop} {
    margin-bottom: 32px;
  } ;
`;

export const FormAndPhotoWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
    width: 100%;
  }
`;
export const DivPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 233px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  ${media.mobile} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
  }
  ${media.desktop} {
    margin-left: auto;
    margin-right: auto;
  } ;
`;

export const UserPhoto = styled.img`
  position: relative;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  width: 233px;
  height: 233px;
  border-radius: 50%;
`;

export const NoAvatarContainer = styled.div`
  width: 233px;
  height: 233px;
  background-color: ${theme.colors.secondary};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const ImgAvatar = styled.svg`
/* filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  width: 233px;
  height: 233px;
  border-radius: 50%; */
// `;

export const Btn = styled.button`
  border: none;
  background: none;
  display: flex;
  ${media.mobile} {
    margin-left: auto;
    margin-bottom: 32px;
    padding-right: 24px;
    padding-left: 0;
  }
  ${media.tablet} {
    position: absolute;
    bottom: -25px;
    right: 0;
    /* margin-left: auto; */
    /* margin-top: 8px; */
  }
  ${media.desktop} {
    position: absolute;
    top: 220px;
    right: 0;
  }
`;

export const InputAvatar = styled.input``;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  font-family: ${theme.fonts.body};
  font-style: normal;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.news};
`;

export const Wrap = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Form1 = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.mobile} {
    margin-bottom: 42px;
  }
  ${media.tablet} {
    width: 100%;
    order: -1;
  }
  ${media.desktop} {
    margin-bottom: 27px;
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${media.mobile} {
    margin-bottom: 8px;
  }
  ${media.tabletAndDesktop} {
    margin-bottom: 15px;
  } ;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  font-family: ${theme.fonts.body};
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  ${media.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
  ${media.tabletAndDesktop} {
    font-size: 18px;
    line-height: 25px;
  } ;
`;

export const MyInput = styled.input`
  //margin-left: auto;
  border: 1px solid transparent;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.news};
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  background-color: ${theme.colors.accentText};
  outline: none;

  cursor: pointer;

  ${media.mobile} {
    //margin-right: 9px;
    height: 24px;
    font-size: 14px;
    line-height: 16px;
    padding-left: 18px;
  }
  ${media.tabletAndDesktop} {
    //margin-right: 24px;
    height: 32px;
    font-size: 18px;
    line-height: 25px;
    padding-left: 12px;
  }

  :hover {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
  :focus {
    background-color: #ffffff;
    color: #f59256 50%;

    outline: none;
    /* transform: scale(1.15); */
  }
  &.active {
    color: #f59256;
  }
`;

export const Input = styled(Field)`
  margin-left: auto;
  border: 1px solid transparent;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.news};
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  background-color: ${theme.colors.accentText};
  outline: none;

  cursor: pointer;

  ${media.mobile} {
    margin-right: 9px;
    height: 24px;
    font-size: 14px;
    line-height: 16px;
    padding-left: 18px;
  }
  ${media.tabletAndDesktop} {
    margin-right: 24px;
    height: 32px;
    font-size: 18px;
    line-height: 25px;
    padding-left: 12px;
  }

  :hover {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
  :focus {
    background-color: #ffffff;
    color: #f59256 50%;

    outline: none;
    /* transform: scale(1.15); */
  }
  &.active {
    color: #f59256;
  }
`;

export const BirthdayContainer = styled.span`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // /* background: '#FDF7F2'; */
  // border-radius: 50%;
  // border: none;
  // ${media.mobile} {
  //   width: 30px;
  //   height: 30px;
  //   /* margin-left: 9px; */
  // }
  // ${media.tabletAndDesktop} {
  //   /* margin-left: 24px; */
  //   width: 32px;
  //   height: 32px;
  // }
  // cursor: pointer;
  // &.active {
  //   color: #f59256;
  // }
`;

export const BtnInput = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: '#FDF7F2'; */
  border-radius: 50%;
  border: none;
  ${media.mobile} {
    width: 30px;
    height: 30px;
    /* margin-left: 9px; */
  }
  ${media.tabletAndDesktop} {
    /* margin-left: 24px; */
    width: 32px;
    height: 32px;
  }
  cursor: pointer;
  &.active {
    color: #f59256;
  }
`;

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${theme.colors.gray};
  background: none;
  padding: 0;
  font-size: 16px;
  line-height: 22px;
  ${media.mobile} {
    margin-left: auto;
  } ;
`;

export const LogOutSpan = styled.span`
  margin-left: 8px;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: 0.04em;
`;
