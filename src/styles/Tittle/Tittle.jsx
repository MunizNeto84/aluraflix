import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-wight: 500;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const Label = styled.label`
  font-size: 0.9rem;
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
