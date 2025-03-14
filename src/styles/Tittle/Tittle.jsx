import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;

  @media (min-width: 1500px) {
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 490px) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 1500px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 490px) {
    font-size: 0.9rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;

  @media (min-width: 1500px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 390px) {
    font-size: 0.7rem;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;

  @media (max-width: 490px) {
    font-size: 0.8rem;
  }
`;

export const Strong = styled.strong`
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--primary200);
  }

  &:active {
    color: var(--primary600);
  }

  @media (min-width: 1500px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 390px) {
    font-size: 0.7rem;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
export const FooterStrong = styled.strong`
  margin: 0;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--primary200);
  }

  &:active {
    color: var(--primary600);
  }
`;

export const TopTenTitle = styled.h1`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 10;
  @media (max-width: 490px) {
    font-size: 16px;
  }
`;

export const Numbers = styled.h1`
  position: static;
  color: white;
  font-size: 140px;
  font-weight: bold;
  text-shadow: var(--primary200) 5px 5px;
  @media (max-width: 490px) {
    font-size: 100px;
  }
`;

export const TitleRelated = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 490px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  color: #ccc;
  font-size: 1rem;
  text-align: center;
  margin-top: 12px;

  @media (max-width: 490px) {
    font-size: 0.7rem;
  }
`;
