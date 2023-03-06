import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 500px;
    background-color: #fdf7f2;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.17);
    border-radius: 20px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 750px;
    background-color: #fdf7f2;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.17);
    border-radius: 20px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }
`;

export const WraperContact = styled.div`
  display: flex;
  gap: 20px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 500px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 750px;
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 100px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Li = styled.li`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  :nth-of-type(2) {
    height: 47px;
  }
  :last-child {
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    :nth-of-type(2) {
      height: 27px;
    }
  }
`;

export const Span = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;

  :hover {
    background-color: #b1deec;
  }
  :focus {
    background-color: #b1deec;
  }
`;

export const Link = styled.a`
  margin: 0;
  display: flex;
  align-items: center;
`;
