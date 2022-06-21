import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.background.secondary};
  @media screen and (min-width: 750px) {
    height: 37px;
  }
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 0 .5rem;
  @media screen and (min-width: 750px) {
    flex-direction: row;
    padding: 0 1rem;
  }
`

export const FooterCopyright = styled.p`
  font-family: "Jost";
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: ${props => props.theme.text.quaternary};
  @media screen and (min-width: 750px) {
    width: 100%;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FooterLink = styled.a`
  font-family: "Nunito";
  font-size: 9px;
  font-weight: 900;
  line-height: 18px;
  text-align: left;
  color: ${props => props.theme.text.secondary};
  margin-left: .5rem;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.025);
  }

  &:first-child {
    margin-left: 0;
  }

  &:nth-child(3)  {
    margin-right: auto;
  }

  @media screen and (min-width: 450px) {
    font-size: 12px;
  }

  @media screen and (min-width: 750px) {
    margin-left: 2rem;
    &:first-child {
      display: none;
    }
    &:nth-child(2) {
      margin-left: auto;
    }
    &:nth-child(3) {
      margin-right: unset;
    }
  }

`

export const FooterSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: all .2s ease-in-out;
    &:hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  @media screen and (min-width: 750px) {
    margin-left: 2rem;
  }
`