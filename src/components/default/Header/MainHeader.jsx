import HeaderContainer from "../../../styles/Header/Header";
import Logo from "../Logo/Logo";
import { ButtonPrincipal } from "../../../styles/Button/Button";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Logo />
      <ButtonPrincipal>Entrar</ButtonPrincipal>
    </HeaderContainer>
  );
};

export default MainHeader;
