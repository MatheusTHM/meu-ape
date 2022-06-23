import styled from "styled-components";

export const DescriptionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 2rem 0;

  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr 1fr;
    padding: 4rem 1rem 1rem;
  }

  @media screen and (min-width: 750px) {
    max-width: 1440px;
    grid-template-columns: unset;
    grid-template-rows: unset;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ResidencyTitle = styled.div`
  grid-column: span 2;
  h1 {
    font-family: "Nunito";
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    color: ${(props) => props.theme.text.primary};
    span {
      position: relative;
      display: block;
      width: max-content;
      font: inherit;
      margin-right: 2.5rem;
      color: ${(props) => props.theme.text.primary};

      @media screen and (min-width: 400px) {
        display: unset;
      }

      &::before {
        content: "";
        position: absolute;
        right: -1.75rem;
        top: calc(50% - 1px);
        width: 1rem;
        height: 2px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.background.tertiary};
      }
    }

    @media screen and (min-width: 750px) {
      font-size: 32px;
      line-height: 44px;
    }
  }
  p {
    font-family: "Jost";
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    color: ${(props) => props.theme.text.primary};

    @media screen and (min-width: 750px) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 750px) {
    grid-column: span 2;
    margin: 1.5rem 0;
  }
`;

export const DescriptionIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  height: 100%;
  @media screen and (min-width: 750px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const DescriptionIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Jost";
  font-size: 9px;
  font-weight: 500;
  line-height: 13px;
  text-align: center;
  color: ${(props) => props.theme.text.primary};
  img {
    width: 50%;
    max-width: 67px;
    max-height: 67px;
  }

  @media screen and (min-width: 400px) {
    img {
      width: 80%;
    }
  }

  @media screen and (min-width: 750px) {
    font-size: 17px;
    line-height: 25px;

    img {
      width: 100%;
    }
  }
`;

export const DescriptionCharacteristics = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  @media screen and (min-width: 750px) {
    order: 3;
    margin-left: 2rem;
  }
`;

export const DescriptionItem = styled.li`
  position: relative;
  font-family: "Jost";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-left: 1.5rem;
  color: ${(props) => props.theme.text.primary};
  &::marker {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme.background.tertiary};
  }
  @media screen and (min-width: 750px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  font-family: "Jost";
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  color: ${(props) => props.theme.text.primary};
  h2 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    color: ${(props) => props.theme.text.primary};
  }

  @media screen and (min-width: 400px) {
    grid-column: span 2;
  }

  @media screen and (min-width: 750px) {
    grid-column: span 1;
    justify-content: flex-start;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    order: 2;

    h2 {
      font-size: 26px;
      line-height: 38px;
    }
  }
`;
