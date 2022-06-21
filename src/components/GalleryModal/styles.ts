import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  overflow: hidden;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: none;
  border: none;
  z-index: 4;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`

interface ModalButtonProps {
  target: 'previous' | 'next';
  able: boolean;
}

export const ModalButton = styled.button<ModalButtonProps>`
  position: absolute;
  top: calc(50% - 16px);
  ${props => props.target === 'previous' ? `left: -20px;` : `right: -20px;` }
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: none;
  border: none;
  z-index: 4;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${props => !props.able && `filter: grayscale(1)` }
  }
`

export const ImageItem = styled.figure`
  width: 100%;
  border-radius: 67px;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    &:hover {
      transform: scale(1.5);
    }
  }
`