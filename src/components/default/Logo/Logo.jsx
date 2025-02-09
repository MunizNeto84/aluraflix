import { LogoContainer, LogoImg } from "../../../styles/Logo/Logo";

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={"/aluraflix.svg"} alt="logo da aluraflix" />
    </LogoContainer>
  );
}

export default Logo;
