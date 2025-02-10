import FooterContainer from "../../../styles/Footer/Footer";
import { FooterStrong, FooterText } from "../../../styles/Tittle/Tittle";

const Footer = () => {
  const newTab = () => {
    window.open("https://github.com/MunizNeto84", "_blank");
  };
  return (
    <FooterContainer>
      <FooterText>
        {new Date().getFullYear()} - Desenvolvido por
        <FooterStrong onClick={newTab}> Muniz Neto</FooterStrong>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
