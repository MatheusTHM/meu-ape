import styled from 'styled-components';

export const VariantsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VariantsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem;

  @media screen and (min-width: 750px) { 
    max-width: 1440px;
  }
`

export const VariantsTitle = styled.h2`
  font-family: "Jost";
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 1rem;

  @media screen and (min-width: 750px) { 
    font-size: 26px;
    line-height: 38px;
  }
`

export const VariantsSubTitle = styled.h3`
  font-family: "Nunito";
  font-size: 14px;
  font-weight: 900;
  line-height: 19px;
  padding: 1rem 0;
  
  @media screen and (min-width: 580px) { 
    padding: 1.5rem 0 0 2rem;
  }

  @media screen and (min-width: 750px) {    
    font-size: 20px;
    line-height: 28px;
  }
`

interface VariantUnitProps {
  active: boolean;
}

export const VariantsUnit = styled.div<VariantUnitProps>`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  ${props => props.active && `
  background-color: ${props.theme.background.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  `};

  &:nth-child(n+3) {
    border-radius: 0;
    border-top: 1px solid ${props => props.theme.border.secondary};
  }

  @media screen and (min-width: 580px) { 
    display: flex;
  }

  @media screen and (min-width: 750px) { 
    padding: 2.5rem;
  }
`

export const UnitIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 580px) { 
    flex: 1;
    justify-content: flex-start;
  }
`

export const UnitFigure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    margin-left: 1rem;
  }
  img {
    max-width: 30px;
    max-height: 30px;

    @media screen and (min-width: 750px) { 
      max-width: 51px;
      max-height: 51px;
    }
  }
  figcaption {
    margin-left: .5rem;
    font-family: "Jost";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: ${props => props.theme.text.primary};

    @media screen and (min-width: 750px) { 
      font-size: 20px;
      line-height: 30px;
    }

  }
`

export const UnitInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  @media screen and (min-width: 580px) { 
    margin: 0 0 0 1rem;
    flex: 2;
  }

  @media screen and (min-width: 750px) { 
    margin: 0 0 0 1rem;
    flex: 1;
  }
`

export const UnitType = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .2rem 1.5rem;
  text-transform: capitalize;
  font-family: "Jost";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  border: 1px solid ${props => props.theme.text.primary};
  border-radius: 10px;

  @media screen and (min-width: 750px) { 
    width: 100%;
    max-width: 180px;
    border-radius: 50px;
    font-size: 20px;
    line-height: 30px;
  }

`

export const UnitPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  font-family: "Jost";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.text.primary};

  @media screen and (min-width: 750px) { 
    font-size: 20px;
    line-height: 30px;
  }
`

export const SelectedUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-family: "Jost";
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
    color: ${props => props.theme.text.primary};

    @media screen and (min-width: 750px) { 
      line-height: 25px;
      font-size: 18px;
    }
  }

  div {
    width: 15px;
    height: 5px;
    margin-left: 1rem;
    border-radius: 5px;
    background-color: ${props => props.theme.background.tertiary};
  }
`

export const NotSelectedUnit = styled.div`
  flex: 1;
  p {
    display: none;
    font-family: "Jost";
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: ${props => props.theme.text.primary};
    opacity: 58%;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 115px;
    padding: .5rem .75rem;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.background.tertiary};
    font-family: "Nunito";
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    text-transform: capitalize;
    color: ${props => props.theme.text.quinary};

    svg {
      margin-right: .5rem;
    }
  }

  @media screen and (min-width: 750px) { 
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      display: none;
    }
  }
`

interface DiferentUnitProps {
  active: boolean;
}

export const DiferentUnit = styled.div<DiferentUnitProps>`
  background-color: ${props => props.theme.background.quaternary};
  border-radius: 0 0 10px 10px;
  margin-top: -1rem;
  padding: 1rem;
  ${props => !props.active && "display: none;"}
`

