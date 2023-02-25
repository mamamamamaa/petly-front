import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 287px;
  height: 227px;
  border-radius: 20px;
  background: white;
  border: 2px solid white;
  &:hover,
  &:focus {
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 268px;
    border-radius: 40px;
  }
  @media (min-width: 1280px) {
    border-radius: 40px;
    width: 394px;
    height: 325px;
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 35%;
  top: 5%;
  color: #f59256;
  @media screen and (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    left: 38%;
  }
`;

export const Img = styled.img`
  height: 160px;
  @media screen and (min-width: 768px) {
    height: 200px;
    top: 10%;
  }
  @media (min-width: 1280px) {
    height: 240px;
  }
`;
