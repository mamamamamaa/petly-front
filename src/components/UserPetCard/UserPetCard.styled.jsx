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
  object-fit: fill;
  display: block;
  border-radius: 20px;
  margin-bottom: 20px;
  ${media.tabletAndDesktop} {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
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
  border-radius: 50%;
  background-color: #fdf7f2;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  ${media.mobile} {
    display: none;
  }
`;
export const PetDeleteButton = styled.button`
  width: 20px;
  height: 21px;
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
