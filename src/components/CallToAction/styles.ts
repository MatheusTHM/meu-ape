import styled from "styled-components";

export const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.background.secondary};
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export const ActionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }

  /* padding: 2rem 4.5rem; */
`;

export const ActionAddress = styled.div`
  h2 {
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    color: ${(props) => props.theme.text.primary};
    span {
      position: relative;
      display: block;
      width: max-content;
      font: inherit;
      margin-right: 2rem;
      color: ${(props) => props.theme.text.primary};

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

      @media screen and (min-width: 600px) {
        display: initial;
        margin-right: 2.5rem;
      }
    }
  }
  p {
    font-family: "Jost";
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    color: ${(props) => props.theme.text.primary};
  }
`;

export const ActionInstallments = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 400px) {
    width: 190px;
    margin-top: 0;
  }

  h3 {
    font-family: "Jost";
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    color: inherit;
    color: ${(props) => props.theme.text.tertiary};

    strong {
      position: relative;
      display: block;
      width: max-content;
      font-family: "Nunito";
      font-size: 24px;
      font-weight: 900;
      line-height: 33px;
      color: inherit;

      span {
        position: absolute;
        right: -20px;
        top: 4px;
        font-family: "Nunito";
        font-size: 12px;
        font-weight: 900;
        line-height: 16px;
        color: inherit;
      }
    }
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 1.5rem 0;
  font-family: "Jost";
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.background.tertiary};
  color: ${(props) => props.theme.text.quinary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
