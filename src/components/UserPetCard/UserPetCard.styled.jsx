import styled from '@emotion/styled';
import PetDeleteIcon from 'utils/svg/petDeleteIcon.svg';
import { media } from 'components/Layout/Layout.styled';
export const PetNameTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
`;
export const PetName = styled.p``;
export const PetDateOfBirthTitle = styled.p``;
export const PetDateOfBirth = styled.p``;
export const PetBreedTitle = styled.p``;
export const PetBreed = styled.p``;
export const PetCommentsTitle = styled.p``;
export const PetComments = styled.p``;
export const PetDeleteButton = styled.button`
  ${media.mobile} {
  }
  width: 17px;
  height: 18px;
  background-image: url(${PetDeleteIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0vw left 0vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${media.tablet} {
  }
  ${media.desktop} {
  }
`;
export const PetImg = styled.img`
  ${media.mobile} {
  }
  width: 100%;
  display: block;
  border-radius: 20px;
`;
