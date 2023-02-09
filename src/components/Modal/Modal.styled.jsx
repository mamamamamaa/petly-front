import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 30;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Window = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;

  height: auto;
  width: auto;
  margin: 80px;
  padding: 40px;

  border-radius: 40px;
`;
