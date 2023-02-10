import styled from '@emotion/styled';

const StyledContainer = styled.div`
  text-align: center;
  h2 {
    margin-top: 42px;
    margin-bottom: 28px;
    @media (min-width: 768px) {
      margin-top: 88px;
      margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
      margin-top: 72px;
      margin-bottom: 60px;
    }
  }
`;
export default StyledContainer;
