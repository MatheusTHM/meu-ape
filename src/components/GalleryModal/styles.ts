import styled from "styled-components";

export const ModalContainer = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 3;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0;
  transform: translate(-50%);
  z-index: 4;

  @media screen and (min-width: 500px) {
    width: 70%;
  }
`;

interface ModalButtonProps {
  target: "previous" | "next";
  able: boolean;
}

export const ModalButton = styled.button<ModalButtonProps>`
  position: absolute;
  top: calc(50% - 16px);
  ${(props) => (props.target === "previous" ? `left: 0;` : `right: 0;`)}
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: none;
  border: none;
  z-index: 4;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    ${(props) =>
      props.target === "previous" ? `left: -84px;` : `right: -84px;`}
  }

  svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${(props) => !props.able && `filter: grayscale(1)`}
  }
`;

export const ImageItem = styled.figure`
  width: 100%;
  max-height: 90vh;
  border-radius: 67px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 67px;
    object-fit: cover;

    /* &:hover {
      transform: scale(1.5);
    } */
  }
`;
