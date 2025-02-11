import styled from "styled-components";

export const InputPrincipal = styled.input`
  padding: 10px;
  height: 3.1rem;
  width: 18.75rem;
  font-size: 1rem;
  border: 1px solid var(--primary200);
  border-radius: 5px;

  &:focus {
    border-color: var(--primary400);
    outline: none;
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(86, 8, 243, 0.8);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const InputForm = styled.input`
  padding: 10px;
  height: 3.1rem;
  width: 25rem;
  font-size: 1rem;
  border: 1px solid var(--primary200);
  border-radius: 5px;

  &:focus {
    border-color: var(--primary400);
    outline: none;
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(86, 8, 243, 0.8);
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem;
  }
`;
