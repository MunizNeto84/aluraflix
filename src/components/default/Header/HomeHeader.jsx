import HeaderContainer from "../../../styles/Header/Header";
import Logo from "../Logo/Logo";
import Nav from "../../../styles/Nav/Nav";
import { ButtonExit, ButtonProfile } from "../../../styles/Button/Button";

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <ButtonProfile></ButtonProfile>
        <ButtonExit src="/exit.svg" alt="Sair "></ButtonExit>
      </Nav>
    </HeaderContainer>
  );
};

export default HomeHeader;
