import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../../styles/Header/Header";
import Logo from "../Logo/Logo";
import { ButtonPrincipal } from "../../../styles/Button/Button";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")} visible={true} />
      <ButtonPrincipal onClick={() => navigate("/login")}>
        Entrar
      </ButtonPrincipal>
    </HeaderContainer>
  );
};

export default MainHeader;
