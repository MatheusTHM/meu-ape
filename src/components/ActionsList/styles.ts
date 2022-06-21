import styled from 'styled-components';

export const ActionsListContainer = styled.ul`
  position: absolute;
  bottom: -3rem;
  left: 50%;
  /* left: calc(50% - ((6 * 93px) / 2)); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  transform: translateX(-50%);
  list-style: none;

  @media screen and (min-width: 420px) {
    bottom: -1.5rem;
  }

  @media screen and (min-width: 750px) {
    bottom: -2.5rem;
  }
`

export const ActionsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin: .25rem;
  border-radius: 50%;
  background-color: ${props => props.theme.background.tertiary};
  list-style: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: "Jost";
  font-size: 12px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.text.quinary};

  @media screen and (min-width: 750px) {
    width: 93px;
    height: 93px;
    margin: 1rem;
  }

  svg {
    height: 45%;
    path {
      fill: ${props => props.theme.background.primary};
    }
  }

  p {
    font: inherit;
    color: ${props => props.theme.text.quinary};
  }

`

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
`