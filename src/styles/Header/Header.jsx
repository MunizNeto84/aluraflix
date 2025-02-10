import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  padding: 1.2rem 2rem;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    transparent 70%
  );
`;

export default HeaderContainer;
