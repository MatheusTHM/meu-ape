import styled from "styled-components";

export const ResidencyGallery = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media screen and (min-width: 750px) {
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const GalleryGradient = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

export const GalleryItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  &:nth-child(1) {
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }
  &:nth-child(3),
  &:nth-child(4) {
    display: none;
    grid-column: span 1;
    grid-row: span 1;
  }

  @media screen and (min-width: 750px) {
    &:nth-child(1) {
      grid-row: span 2;
    }
    &:nth-child(2) {
      grid-column: span 1;
      grid-row: span 2;
    }
    &:nth-child(3),
    &:nth-child(4) {
      display: block;
    }
  }
`;
