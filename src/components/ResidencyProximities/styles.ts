import styled from 'styled-components';

export const ProximitiesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ProximitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 0 6.25rem 0;
  padding: 2rem;
  border-radius: 22px;
  background-color: ${props => props.theme.background.secondary};

  @media screen and (min-width: 500px) {
    margin: 1.5rem 1.5rem 6.25rem;
  }

  @media screen and (min-width: 750px) {
    max-width: 1440px;
    padding: 4.875rem 5.5rem
  }
`

export const ProximitiesType = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 3fr 1fr; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
  padding: 1.5rem 0 0;
  border-top: 1px solid ${props => props.theme.text.primary};
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
  
  @media screen and (min-width: 500px) { 
    flex-direction: row;
    padding: 1.5rem 2rem 0 2rem;
  }

  @media screen and (min-width: 750px) { 
    margin-top: 2rem;
    padding-top: 2rem;
  }
`


export const ValuesContainer = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 500px) { 
    margin-left: 2rem;
  }

  @media screen and (min-width: 750px) { 
    flex: 3;
  }
`

export const ProximitiesPlace = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 60px;
  overflow: hidden;
  flex: 1;
  figcaption {
    width: 60px;
    margin-bottom: 1rem;
    font-family: "Jost";
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    text-align: center;
    text-transform: capitalize;
    border: 1px solid ${props => props.theme.text.primary};
    border-radius: 34px;
    color: ${props => props.theme.text.primary};

    @media screen and (min-width: 750px) { 
      width: 100%;
      max-width: 172px;
      font-size: 20px;
      line-height: 30px;
      border-width: 2px;
  }
  }
  img {
    width: 100%;
    max-width: 32px;
    max-height: 32px;
    @media screen and (min-width: 750px) { 
      max-width: 95px;
      max-height: 95px;
    }
  }

  @media screen and (min-width: 500px) { 
    width: 75%;
  }
`

export const ProximitiesNames = styled.div`
  p {
    font-family: "Jost";
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    text-transform: capitalize;

    @media screen and (min-width: 750px) { 
      font-size: 23px;
      line-height: 34px;
    }
  }
`
export const ProximitiesDistance = styled.div`
  width: 12ch;
  margin-left: .5rem;
  p {
    font-family: "Jost";
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    text-transform: capitalize;
    @media screen and (min-width: 750px) { 
      font-size: 23px;
      line-height: 34px;
    }
  }
`
