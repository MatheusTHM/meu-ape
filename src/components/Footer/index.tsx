import { FooterContainer, FooterContent, FooterCopyright, FooterLinks, FooterLink, FooterSocialMedia } from "./styles"
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg"
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg"
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopyright>
          © 2018 Todos os direitos reservados a Meu 1º Apê Serviços imobiliários Ltda | CRECI-MG PJ5668
        </FooterCopyright>
        <FooterLinks>
          <FooterLink href="#Home">
            Sitemap
          </FooterLink>
          <FooterLink href="#Home">
            Termos de Uso
          </FooterLink>
          <FooterLink href="#Home">
            Política de Privacidade
          </FooterLink>
          <FooterSocialMedia>
            <a href="#Home">
              <Facebook />
            </a>
            <a href="#Home">
              <Instagram />
            </a>
            <a href="#Home">
              <Linkedin />
            </a>
          </FooterSocialMedia>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer