import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    gap: 35px;
    /* margin-top: 60px; */
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Li = styled.li`
  list-style: none;
  /* outline: 2px solid red; */
  margin-bottom: 20px;
  width: 280px;
  padding-left: 0px;
  padding-right: 0px;

  @media screen and (max-width: 767px) {
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 335px;
    &:nth-of-type(-n + 2) {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    &:nth-of-type(-n + 3) {
      margin-bottom: 40px;
    }
  }
`;

export const Box = styled.div``;

export const ColorBox = styled.div`
  height: 8px;
  border-radius: 40px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  margin-bottom: 4px;

  @media screen and (max-width: 767px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 280px;
  }
  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const Header = styled.h2`
  height: 55px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 24px;
  color: #111111;
  -webkit-line-clamp: 2; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  overflow: hidden;
`;

export const Paragraph = styled.p`
  margin: 0;
  height: 167px;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #111321;
  -webkit-line-clamp: 9; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  @media screen and (min-width: 768px) {
    /* margin-bottom: 40px; */
    height: 130px;
    -webkit-line-clamp: 7; /* Число отображаемых строк */
  }
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateBox = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);
`;

export const BoxHref = styled.a`
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  color: #f59256;

  &:hover {
    color: #ff6101;
  }
`;
