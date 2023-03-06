import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 21px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 45px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 35px;
  }
`;

export const NothingFound = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #696969;
  text-align: center;
  padding: 60px;
`;

export const MainHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.3;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 28px;
  }
`;

export const BoxPagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const ButtonArrow = styled.button`
  height: 45px;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
`;

export const Arrow = styled.span`
  color: rgba(17, 17, 17, 0.6);
  :hover {
    color: black;
  }
  :focus {
    color: black;
  }
`;

export const Plug = styled.div`
  height: 45px;
  width: 76px;
`;

export const Text = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  margin-left: 20px;
  margin-right: 20px;
  color: rgba(17, 17, 17, 0.6);
`;
