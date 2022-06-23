import { FC } from "react";
import { ResidencyGallery, GalleryItem, GalleryGradient } from "./styles";

interface ResidencyImagesProps {
  media: object[];
}

const ResidencyImages: FC<ResidencyImagesProps> = ({ media }) => {
  return (
    <ResidencyGallery>
      {media.map(({ media, type }: any, index) => {
        if (index < 4) {
          return <GalleryItem key={index} src={media} alt={type} />;
        }
        return null;
      })}
      <GalleryGradient />
    </ResidencyGallery>
  );
};

export default ResidencyImages;
