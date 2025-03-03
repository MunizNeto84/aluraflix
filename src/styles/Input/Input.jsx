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

  @media (max-width: 490px) {
    height: 2.5rem;
    width: 13rem;
    font-size: 0.7rem;
  }

  @media (min-width: 1024px) {
    height: 2.8rem;
    width: 14.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 1500px) {
    height: 3.5rem;
    width: 19.5rem;
    font-size: 1.2rem;
  }
`;

export const InputForm = styled.input`
  padding: 0.8rem;
  height: 3.5rem;
  width: 100%;
  max-width: 28rem;
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

  @media (max-width: 768px) {
    height: 3rem;
    font-size: 0.95rem;
    padding: 1rem;
    max-width: 25rem;
  }

  @media (max-width: 480px) {
    height: 2.6rem;
    font-size: 0.9rem;
    padding: 0.6rem;
    max-width: 90%;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 250px;
  display: ${(props) => (props.visible ? "block" : "none")};

  @media (max-width: 490px) {
    margin-top: 2px;
    width: 215px;
  }
`;
