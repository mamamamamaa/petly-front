import styled from '@emotion/styled';
import adver from 'utils/svg/adv.svg';
import { theme } from 'utils/theme';
import { media } from 'components/Layout/Layout.styled';

export const PhotoPetWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const PhotoPet = styled.img`
  position: relative;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 288px;
  width: 100%;
  display: block;
  cursor: pointer;
  ${media.tablet} {
    width: 336px;
  }
  ${media.desktop} {
    width: 288px;
  }
`;

export const AdvWrapper = styled.div`
  position: absolute;
  background-size: 158px 28px;
  background-image: url(${adver});
  background-repeat: no-repeat;
  width: 158px;
  height: 28px;
  top: 20px;
  left: 0;
`;
export const AdvTitle = styled.span`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.titleText};
  margin-left: 20px;
  margin-top: 6px;
`;

export const AddPetToNotBtnMob = styled.button`
  ${media.mobile} {
    position: absolute;
    width: 80px;
    height: 80px;
    background: #f59256;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 50%;
    top: 67px;
    right: 0;
    cursor: pointer;
    border: 0;
  }
  ${media.tabletAndDesktop} {
    display: none;
  }
`;

export const AddPetToNotImgMob = styled.img`
  ${media.mobile} {
    position: absolute;
    top: 21px;
    right: 29px;
  }
  ${media.tabletAndDesktop} {
    display: none;
  }
`;

export const AddPetToNotTextMob = styled.span`
  ${media.mobile} {
    position: absolute;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    top: 48px;
    right: 18px;
  }
  ${media.tabletAndDesktop} {
    display: none;
  }
`;

export const AddToFavBtn = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ffffff99;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
`;

export const AddToFavImg = styled.img`
  position: absolute;
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: ${theme.colors.titleText};
  max-width: 240px;
  overflow: hidden;
  white-space: nowrap;
`;

export const BoxPetDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 278px; */
`;

export const WraperPetDetails = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  margin-right: 40px;
  :last-child {
    margin-right: 0px;
  }
`;

export const Li = styled.li`
  margin-top: 8px;
  :first-of-type {
    margin-top: 0;
  }
`;

export const EmptyBox = styled.div`
  height: 26px;
  width: 60px;
  background-color: transparent;
`;

export const WraperButton = styled.div`
  display: flex;
  flex-direction: column;
`;

// ==============
export const BtnDetails = styled.button`
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;

  height: 38px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 40px;
  background: ${theme.colors.accentText};
  cursor: pointer;
  color: ${theme.colors.primary};
  color: ${theme.colors.accentButton};
  ${media.tabletAndDesktop} {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PetDetailsButtonText = styled.p`
  color: #f59256;
`;

export const PetDeleteButton = styled.button`
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  cursor: pointer;
  color: ${theme.colors.accentButton};
  background: ${theme.colors.accentText};
  width: 100%;
  margin-top: 12px;
  border: 2px solid ${theme.colors.accentButton};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  ${media.tabletAndDesktop} {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PetDeleteButtonDiv = styled.div`
  width: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PetDeleteButtonText = styled.span`
  display: block;
  color: ${theme.colors.accentButton};
`;
export const PetDeleteButtonImg = styled.img``;
