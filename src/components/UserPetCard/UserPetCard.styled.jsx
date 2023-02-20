import styled from '@emotion/styled';
import PetDeleteIcon from 'utils/svg/petDeleteIcon.svg';
import { media } from 'components/Layout/Layout.styled';
export const PetTextWrapper = styled.div`
  // ${media.desktop} {
  //   display: inline-block;
  // }
`;
export const PetArticle = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 40px;
  ${media.tablet} {
    display: flex;
    margin-right: 32px;
    padding: 20px;
  }
  ${media.desktop} {
    padding-left: 20px;
    padding-right: 28px;
    padding-top: 20px;
    padding-bottom: 26px;
    display: flex;
  }
`;
export const PetImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
     
  ${media.desktop} {
    display: inline-block;
  }
`;
export const PetSpanWrapper = styled.div``;
export const PetSpanWrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PetSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-right: 7px;
`;
export const PetComments = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-right: 7px;
`;
export const PetDeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50%; */
  background-color: #fdf7f2;
  position: relative;  
  width: 20px;
  height: 20px;  
`;
export const PetDeleteButton = styled.button`
  top: 26px;
  right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(${PetDeleteIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0vw left 0vw;
  border: none;
  ${media.tablet} {
    width: 20px;
    height: 21px;
    margin-left: 0;
  }
  ${media.desktop} {
  }
`;
export const PetImgWrapper = styled.div`
  width: 100%;
  height:auto;
  margin-bottom: 20px;
  border-radius: 20px;
  ${media.tabletAndDesktop} {
    margin-bottom: 0;
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`; 

export const PetInfoWrapper = styled.div`
  margin-top: 12px;
`;

export const Text = styled.p`
  -webkit-line-clamp: 6; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  /* word-break: break-all; */
  /* word-wrap: break-word; */
`;

