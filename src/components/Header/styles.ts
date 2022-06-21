import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 98px;
  background-color: ${props => props.theme.background.secondary};
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 0 .5rem;
  @media screen and (min-width: 400px) {
    padding: 0 1rem;
  }
`
export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63px;
  max-width: 252px;
  overflow: hidden;
  transition: all .2s ease-in-out;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`
export const HeaderNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-left: 4rem;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`
export const HeaderItems = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  > li {
    height: 100%;
  }
`

interface HeaderItemProps {
  active: boolean;
}

export const HeaderItem = styled.li<HeaderItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 245px;
  height: 100%;
  ${props => props.active && `border-bottom: 5px solid ${props.theme.text.secondary};`}
`
export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  font-family: "Nunito";
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.text.primary};
  transition: all .2s ease-in-out;
  &:hover {
    font-weight: 700;
  }
`


export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`

export const Menu = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: none;
  }
`

export const UserButton = styled.button`
  display: none;
  width: 235px;
  height: 65px;
  font-family: "Nunito";
  font-size: 22px;
  font-weight: 900;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.text.tertiary};
  border: 4px solid ${props => props.theme.text.tertiary};
  border-radius: 60px;
  background-color: ${props => props.theme.background.secondary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
  @media screen and (min-width: 900px) {
    display: block;
  }
`