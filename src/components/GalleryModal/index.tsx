import { useState, FC } from "react";
import { ImageItem, ModalContainer, ModalContent, ModalButton, ModalCloseButton } from "./styles"
import { ReactComponent as Previous } from "../../assets/images/previous-icon-white.svg" 
import { ReactComponent as Next } from "../../assets/images/next-icon-white.svg" 
import { ReactComponent as Close } from "../../assets/images/close-icon.svg" 

interface ModalProps {
  media: {media:string; type:string}[];
  modalActive: boolean;
  setModalActive: Function;
}

const GalleryModal:FC<ModalProps> = ({ modalActive, setModalActive, media }) => {
  const [modalIndex, setModalIndex] = useState(0)

  function handleModalIndex(target:number) {
    if(target >= 0 && target < media.length) {
      setModalIndex(target)
    }
  }

  if(!modalActive) return null;

  return (
    <ModalContainer>
      <ModalContent>

        <ModalCloseButton onClick={() => setModalActive(false)}>
          <Close  />
        </ModalCloseButton>

        <ModalButton able={modalIndex > 0} target="previous" onClick={() => handleModalIndex(modalIndex - 1)}>
          <Previous />
        </ModalButton>

        <ModalButton able={modalIndex < media.length - 1} target="next" onClick={() => handleModalIndex(modalIndex + 1)}>
          <Next />
        </ModalButton>

        <ImageItem  >
          <img src={media[modalIndex].media} alt={media[modalIndex].type} />
        </ImageItem>

      </ModalContent>
    </ModalContainer>
  )
}

export default GalleryModal