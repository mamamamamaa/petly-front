import styled from '@emotion/styled';

export const Container = styled.div`
  color: #3c3c4f;
  /* background: #dbe8f4; */
  line-height: 1.3;
  padding: 20px 20px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 700px;
    border-radius: 40px;
    height: 600px;
    padding: 20px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 1000px;
    border-radius: 40px;
    height: 700px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 750px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 28px;
  }
`;

export const TitleHi = styled.h2`
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
  }
`;
export const TitleBy = styled.h2`
  font-weight: 500;
  color: green;
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const BoxVideo = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`;

export const Iframe = styled.iframe`
  background: #dbe8f4;
  width: 280px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 380px;
  }
  @media screen and (min-width: 1280px) {
    width: 750px;
    height: 480px;
  }
`;

export const Img = styled.img`
  height: 60px;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
  @media (min-width: 1280px) {
    height: 100px;
  }
`;

export const Ul = styled.ul`
  @media screen and (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const Li = styled.li`
  @media screen and (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
