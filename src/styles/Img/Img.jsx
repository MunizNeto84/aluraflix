import styled from "styled-components";

export const Img = styled.img`
  @keyframes crescer {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  width: 100%;
  transition: transform 0.2s ease;
  animation: crescer 12s infinite alternate ease-in-out;

  @media (min-width: 1024px) {
    height: 400px;
    object-fit: cover;
  }
`;

export const ImgLogo = styled.img`
  position: absolute;
  bottom: 40px;
  left: 18px;
  width: 280px;
`;

export const ThumbnailPerfil = styled.img`
  position: relative;
  left: -20px;
  margin-left: 5px;
  cursor: pointer;
  height: 140px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 160px;
    height: 120px;
    border-radius: 5px;
    border: 5px solid transparent;
  }

  &.active img {
    border-color: var(--primary200);
  }
`;
