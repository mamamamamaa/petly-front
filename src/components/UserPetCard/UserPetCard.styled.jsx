import styled from '@emotion/styled';
import PetDeleteIcon from 'utils/svg/petDeleteIcon.svg';
import { media } from 'components/Layout/Layout.styled';
export const PetArticle = styled.article`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
`;
export const PetImg = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  margin-bottom: 20px;
`;
export const PetSpanWrapper = styled.div``;
export const PetSpanWrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
}
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
export const PetDeleteButton = styled.button`
  width: 17px;
  height: 18px;
  background-image: url(${PetDeleteIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0vw left 0vw;
  margin-left: auto;
  border: none;
  ${media.tablet} {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  ${media.desktop} {
  }
`;
