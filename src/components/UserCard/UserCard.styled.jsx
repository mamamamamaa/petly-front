import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { theme } from '../../utils/theme';
import { media } from '../Layout/Layout.styled'

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
  };
  ${media.tablet} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 40px;
  }
  ${media.desktop} {

  }
`;

export const Card = styled.div`
  background: ${theme.colors.accentText};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  ${media.mobile} {
    border-radius:  20px;
    min-width: 280px;
    min-height: 537px;
    /* top, right, bottom, left */
    padding: 20px 24px 20px 23px;
  };
  ${media.tablet} {
    display: flex;
    border-radius: 0px 40px 40px 0px;
    padding: 24px 40px 24px 32px;
    margin-left: -32px;
    margin-right: auto;
    flex-wrap: wrap;
    align-items: center;
  }
  ${media.desktop} {
    /* width: 288px; */
    /* height: 606px; */
  }
`;

export const Wrapper = styled.div`
  ${media.tablet} {
    margin-left: 52px;
}
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
    /* filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11)); */
  ${media.mobile} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    width: 233px;
    height: 233px;
  };
  ${media.tablet} {

  };
  ${media.desktop} {

  };
`;

// export const Shadow = styled.div`
// box-shadow: (0px 4px 14px rgba(0, 0, 0, 0.11));
// `

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

export const ImgAvatar = styled.svg`
  /* filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  width: 233px;
  height: 233px;
  border-radius: 50%; */
`;

export const Btn = styled.button`
    border: none;
    background: none;
    display: flex;
  ${media.mobile} {
    margin-left: auto;
    margin-bottom: 32px;
    padding-right: 24px;
  };
  ${media.tablet} {
    margin-left: auto;
    margin-top: 8px;
  }
`;

export const InputAvatar = styled.input`
  // z-index: 100 ;
`;
export const Span = styled.span`
  font-family: ${theme.fonts.body};
  font-style: normal;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.news};
  ${media.mobile} {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.04em;
    margin-left: 5px;
  };
  ${media.tablet} {
      font-size: 12px;
      line-height: 22px;
      margin-left: 5px;
  };
  ${media.desktop} {

  };
/* 
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  // color: #F59256; */
`;

export const Wrap = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FormWrap = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  ${media.mobile} {

  };
  ${media.tablet} {
    order: -1;
  };
  ${media.desktop} {

  };
/* width: 100%;
padding: 0; */
`
export const Form1 = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.mobile} {
    margin-bottom: 42px;
  };
  ${media.tablet} {
      width: 100%;
      order: -1;
  };
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${media.mobile} {
    margin-bottom: 8px;
  };
  ${media.tablet} {
    margin-bottom: 15px;
  }
  /* margin-left: auto; */
`;

// export const Label = styled.label`
  
//   font-weight: 400;  
//   color: #111111;
//   /* margin-right: 10px; */
//   font-size: 24px;
//   line-height: 1.36;
// `;

export const FormLabel = styled.label`
  display: flex;
  align-items: baseline;
  width: 100%;
  font-family: ${theme.fonts.body};
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: 0.04em;
  ${media.tablet} {
    font-size: 18px;
    line-height: 25px;
  };
`;

export const Input = styled(Field)`
  margin-left: auto;
  border: 1px solid transparent;
  font-weight: ${theme.fontWeights.news};
  letter-spacing: 0.04em;
  color: ${theme.colors.black};
  background-color: ${theme.colors.accentText};
  outline: none;
  ${media.mobile} {
    height: 24px;
    font-size: 14px;
    line-height: 16px;
  };
  ${media.tablet} {
    font-size: 18px;
    line-height: 25px;
    height: 32px;
  };
  //margin: 0 auto;
`

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
  };
  /* margin-left: auto; */
  ${media.tablet} {
    margin-left: 24px;
    width: 32px;
    height: 32px;
  }
`;

export const BtnLogOut = styled.button`
  
  align-items: center;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
  letter-spacing: 0.04em;
  border: none;
  color: ${theme.colors.gray};
  background: none;
  padding: 0;
  ${media.mobile} {
    align-items: center;
    display: flex;
    margin-left: auto;
    font-size: 16px;
    line-height: 22px;
  };
   ${media.tablet} {
      display: block;
      font-size: 16px;
      line-height: 22px;
   }
`;

export const LogOutSpan = styled.span`
  margin-left: 8px;
`