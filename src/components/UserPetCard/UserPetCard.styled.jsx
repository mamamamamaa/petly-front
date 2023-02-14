import styled from '@emotion/styled';
import PetDeleteIcon from 'utils/svg/petDeleteIcon.svg';
import { theme } from 'utils/theme';
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
  width: 170px;
  height: 180px;
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
  width: 240px;
  height: 240px;
  display: block;
  border-radius: 20px;
`;
export const PetUl = styled.ul`
  ${media.mobile} {
  }
  background: #fdf7f2;
`;
export const PetLi = styled.li`
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;
