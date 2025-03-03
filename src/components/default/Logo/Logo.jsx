import { LogoContainer, LogoImg } from "../../../styles/Logo/Logo";

function Logo({ onClick, visible }) {
  return (
    <LogoContainer
      onContextMenu={(e) => e.preventDefault()}
      onClick={onClick}
      visible={visible}
    >
      <LogoImg src={"/aluraflix.svg"} alt="logo da aluraflix" />
    </LogoContainer>
  );
}

export default Logo;
