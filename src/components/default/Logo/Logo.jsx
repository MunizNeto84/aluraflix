import { LogoContainer, LogoImg } from "../../../styles/Logo/Logo";

function Logo({ onClick }) {
  return (
    <LogoContainer onContextMenu={(e) => e.preventDefault()} onClick={onClick}>
      <LogoImg src={"/aluraflix.svg"} alt="logo da aluraflix" />
    </LogoContainer>
  );
}

export default Logo;
