import { FC, useState } from "react";
import { ActionsListContainer, ActionsItem, ActionButton } from "./styles";
import { ReactComponent as Gallery } from "../../assets/images/gallery.svg";
import { ReactComponent as Video } from "../../assets/images/video-play.svg";
import { ReactComponent as Plan } from "../../assets/images/element-2.svg";
import { ReactComponent as Tour } from "../../assets/images/3d-rotate.svg";
import { ReactComponent as Map } from "../../assets/images/map.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import GalleryModal from "../GalleryModal";
interface ActionsListProps {
  media: { media: string; type: string }[];
}

const ActionsList: FC<ActionsListProps> = ({ media }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <ActionsListContainer>
        <ActionsItem>
          <ActionButton onClick={() => setModalActive(true)}>
            <Gallery />
            <p>Fotos</p>
          </ActionButton>
        </ActionsItem>
        <ActionsItem>
          <Video />
          <p>Videos</p>
        </ActionsItem>
        <ActionsItem>
          <Plan />
          <p>Planta</p>
        </ActionsItem>
        <ActionsItem>
          <Tour />
          <p>Tour 3D</p>
        </ActionsItem>
        <ActionsItem>
          <Map />
          <p>Mapa</p>
        </ActionsItem>
        <ActionsItem>
          <Location />
          <p>Rua</p>
        </ActionsItem>
      </ActionsListContainer>
      <GalleryModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        media={media}
      />
    </>
  );
};

export default ActionsList;
