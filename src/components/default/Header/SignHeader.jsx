import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../../styles/Header/Header";
import Logo from "../Logo/Logo";

const SignHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")} />
    </HeaderContainer>
  );
};

export default SignHeader;
