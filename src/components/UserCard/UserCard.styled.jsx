import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { theme } from '../../utils/theme';

export const Title = styled.h2`
  color: ${theme.colors.textTitleColor};
  margin-bottom: 18px;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
`
export const Card = styled.div`
  
  width: 280px;
  height: 537px;
  padding: 20px 12px 20px 12px;
  background: ${theme.colors.accentText};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius:  20px;
  cursor: pointer;
  @media (min-width: 768px) {
    border-radius: 0px 0px 40px 40px;
    height: 246px;
    /* width: 336px; */
  }
  @media (min-width: 1280px) {
    /* width: 288px; */
    height: 606px;
  }
`;

export const Wrapper = styled.div`
position: relative;  

`
export const DivPhoto = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 66px;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 233px;
  
  `
export const Shadow = styled.div`
box-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`

export const UserPhoto = styled.img`
  position: relative;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  width: 233px;
  height: 233px;
  border-radius: 50%;
 
`;

export const ImgAvatar = styled.img`
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  width: 233px;
  height: 233px;
  border-radius: 50%;
 
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;  
  border: none;
  background: none;
  position: absolute;
  fill: #F59256 ;
  @media (max-width: 479px) {
    top: 266px;
    right: 25px;
  }
`
export const InputAvatar = styled.input`
  // z-index: 100 ;
`
export const Span = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  // color: #F59256;
`;

export const Wrap = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FormWrap = styled.div`
width: 100%;
padding: 0;

`
export const Form1 = styled(Form)`
   display: grid;
   
  margin: 0 auto;


`
export const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  
`
export const Label = styled.label`
  
  font-weight: 400;  
  color: #111111;
  
  `


export const Input = styled(Field)`
  // margin-left: 25px;

  width: 160px;
  height: 24px;
  margin-right: 14px;  
  border: 1px solid transparent;
  border-radius: 40px;
  font-weight: 400;
  letter-spacing: 0.04em;
  font-size: 14px;
  background: transparent;
  color: #111111;
  
  //outline: none;
  &:hover{
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
`

export const BtnInput = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: '#FDF7F2';
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;  
  
  cursor: pointer;
  &.active{
    color:#F59256;
  }
   &.focus{
      color:#F59256 50 %;
      outline: "none",
      transform: "scale(1.15)"
    },
  
`

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  
  border: none;
  color: rgba(17, 17, 17, 0.6);
  background: none;
  margin-top: 12px;
  padding: 0;
`