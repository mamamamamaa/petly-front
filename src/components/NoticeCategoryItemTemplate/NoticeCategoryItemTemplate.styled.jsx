import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
import { theme } from '../../utils/theme';

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
`;

export const AddToFavImg = styled.img`
  position: absolute;
`;
export const AddPetToNoticesBtn = styled.button`
  position: absolute;
  width: 80px;
  height: 80px;
  background: #f59256;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 50%;
  top: 67px;
  right: 0;
  cursor: pointer;
`;
export const AddPetToNoticesImg = styled.img`
  position: absolute;
  top: 21px;
  right: 29px;
`;
export const AddPetToNoticesText = styled.span`
  position: absolute;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  top: 48px;
  right: 18px;
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
  :last-child {
    color: ${theme.colors.accentButton};
  }
  @media (min-width: 768px) {
    width: 248px;
    margin: 0 auto;
  }
`;
export const PetDetailsButtonText = styled.p`
  color: #f59256;
`;
