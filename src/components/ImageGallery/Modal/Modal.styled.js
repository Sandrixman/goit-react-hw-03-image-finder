import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
`;

export const ModalBlock = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Btn = styled.button`
  position: absolute;
  top: 5vw;
  right: 5vh;
  width: 25px;
  height: 25px;
`;
