import styled from "styled-components";

export const ButtonPrincipal = styled.button`
  height: 2.5rem;
  width: 5rem;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--primary200);

  &:hover {
    background-color: var(--primary400);
  }

  &:active {
    background-color: var(--primary600);
  }
`;
