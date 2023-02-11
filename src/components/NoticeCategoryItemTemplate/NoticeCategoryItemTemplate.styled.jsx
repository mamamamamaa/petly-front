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
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px; 
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
  color: #111111;
  margin-left: 20px;
  margin-top: 6px;
`;
export const AddToFavBtn = styled.button`
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
  color: #111111;
  margin-bottom: 20px;
  max-width: 240px;
  overflow: hidden;
  white-space: nowrap;
`;
export const PetSpanWrapper = styled.div`
  margin-bottom: 8px;
  :last-of-type {
    margin-bottom: 50px;
  }
`;
export const PetSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
  :last-child {
    margin-left: 40px;
  }
`;
export const PetDetails = styled.div`
  padding: 20px;
`;
export const PetDetailsButton = styled.button`
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
  margin-bottom: 12px;
  color: ${theme.colors.accentButton};
  @media (min-width: 768px) {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const PetDetailsButtonText = styled.p`
  color: #f59256;
`;
export const PetDeleteButton = styled.button`
  color: #ff6101;
  background: ${theme.colors.accentText};
  width: 100%;
  border: 2px solid #ff6101;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  @media (min-width: 768px) {
    width: 248px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const PetDeleteButtonDiv = styled.div`
  width: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PetDeleteButtonText = styled.span`
  display: block;
  color: #ff6101;
`;
export const PetDeleteButtonImg = styled.img``;
