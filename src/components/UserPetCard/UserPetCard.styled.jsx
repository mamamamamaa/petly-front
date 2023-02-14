import styled from '@emotion/styled';
import { PetDeleteIcon } from 'utils/svg/petDeleteIcon';
import { theme } from 'utils/theme';
import { media } from 'components/Layout/Layout.styled';

export const PetName = styled.p``;
export const PetDateOfBirth = styled.span``;
export const PetBreed = styled.p``;
export const PetComments = styled.p``;
export const PetDeleteButton = styled.button`
  width: 17px;
  height: 18px;
  ${media.mobile} {
    background-image: url(${PetDeleteIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top 0vw left 0vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  ${media.tablet} {
  }
  ${media.desktop} {
  }
`;
export const PetImg = styled.img``;
export const PetUl = styled.ul``;
export const PetLi = styled.li``;