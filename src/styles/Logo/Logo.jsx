import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;

  @media (max-width: 490px) {
    display: ${(props) => (props.visible ? "flex" : "none")};
  }
`;

export const LogoImg = styled.img`
  height: 3.1rem;
  width: 7.5rem;
  user-select: none;
  pointer-events: none;

  @media (max-width: 490px) {
    height: 2.5rem;
    width: 6rem;
  }

  @media (min-width: 1024px) {
    height: 4rem;
    width: 10rem;
  }
`;
