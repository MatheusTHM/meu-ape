import styled from 'styled-components';

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const PricingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 1rem 0;

  @media screen and (min-width: 560px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto;
    padding-top: .5rem;
  }

  @media screen and (min-width: 750px) {
    max-width: 1440px;
  }
  
  @media screen and (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const ResidencyPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 560px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 300px;
  padding: 1rem;
  margin: 0 .5rem .5rem;
  font-family: "Jost";
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.text.primary};
  border-radius: 5px;
  background-color: ${props => props.theme.background.secondary};

  &:nth-child(1) {
    margin-left: 0;
  }

  p {
    font: inherit;
    font-size: 14px;
    line-height: 22px;
    color: ${props => props.theme.text.secondary};
  }

  @media screen and (min-width: 750px) {
    font-size: 20px;
    line-height: 30px;
    p {
      font-size: 22px;
      line-height: 32px;
    }
  }

  @media screen and (min-width: 900px) {
    p {
      font-size: 32px;
      line-height: 46px;
    }
  }

`

export const ResidencyCompletion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 560px) {
    padding: 0 1rem;
  }
`

export const CompletionStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 150px;
  padding: .25rem 1rem;
  margin-bottom: .5rem;
  font-family: "Nunito";
  font-size: 14px;
  font-weight: 900;
  line-height: 19px;
  text-align: center;
  text-transform: capitalize;
  border: 4px solid ${props => props.theme.text.secondary};
  border-radius: 60px;
  color: ${props => props.theme.text.secondary};

  @media screen and (min-width: 560px) {
    max-width: none;
  }

  @media screen and (min-width: 750px) {
    font-size: 25px;
    line-height: 34px;
    border-width: 7px;
  }
`

export const CompletionDeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 1rem 1rem;
  font-family: "Jost";
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.text.quinary};
  border-radius: 8px;
  background-color: ${props => props.theme.background.tertiary};

  p {
    font-family: "Nunito";
    font-size: 14px;
    font-weight: 900;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.text.quinary};
  }

  @media screen and (min-width: 750px) {
    font-size: 23px;
    line-height: 33px;
    p {
      font-size: 27px;
      line-height: 37px;
    }
  }
`

export const ResidencyDocumentation = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  padding: 1rem .75rem;
  margin: .5rem 0;
  border-radius: 5px;
  background-color: ${props => props.theme.background.secondary};

  > div {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: space-between;
  }

  > svg {
    grid-column: 3 / 4;
    grid-row: 1 / span 3;
    display: none;
    padding-left: 2rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 560px) {
    grid-template-columns: 2fr 1fr 2fr;
    padding: 2rem;

    > svg {
      display: block;
    }
  }
`

export const DocumentName = styled.p`
  font-family: "Jost";
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: ${props => props.theme.text.primary};

  @media screen and (min-width: 750px) {
    font-size: 20px;
    line-height: 30px;
  }
`

interface DocumentPriceProps {
  highlight?: boolean;
}

export const DocumentPrice = styled.p<DocumentPriceProps>`
  font-family: "Jost";
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: right;
  text-decoration: line-through;
  text-decoration-color: #FF3C3C;
  color: ${props => props.theme.text.primary};
  ${props => props.highlight && `
    text-decoration: none;
    color: ${props.theme.text.secondary};
  `}

  @media screen and (min-width: 750px) {
    font-size: 20px;
    line-height: 30px;
  }
`