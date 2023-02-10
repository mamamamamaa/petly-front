import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 42px;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 90px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 70px;
  }
`;

export const MainHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 48px;
  color: #111111;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

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
    margin-top: 60px;
    flex-wrap: wrap;
  }
`;

export const Li = styled.li`
  list-style: none;
  /* outline: 2px solid red; */
  margin-bottom: 40px;
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
    &:nth-child(-n + 2) {
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    &:nth-child(-n + 3) {
      margin-bottom: 60px;
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
    margin-bottom: 40px;
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

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #f59256;
`;
