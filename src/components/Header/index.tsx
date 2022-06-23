import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNav,
  HeaderItems,
  HeaderItem,
  HeaderLink,
  UserButton,
  HeaderMenu,
  Menu,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/images/main-logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu-icon.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo href="#Home">
          <Logo id="Home" />
        </HeaderLogo>
        <HeaderNav>
          <HeaderItems>
            <HeaderItem active={true}>
              <HeaderLink href="#Home">Imóvel</HeaderLink>
            </HeaderItem>
          </HeaderItems>
        </HeaderNav>
        <HeaderMenu>
          <UserButton>User</UserButton>
          <Menu>
            <MenuIcon />
          </Menu>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
