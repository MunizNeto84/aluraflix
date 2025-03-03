import styled from "styled-components";

export const ButtonPrincipal = styled.button`
  height: 2.5rem;
  width: 5rem;
  font-size: 1rem;
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

  @media (max-width: 490px) {
    height: 2rem;
    width: 4rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    height: 3rem;
    width: 6rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1500px) {
    height: 3.5rem;
    width: 7rem;
    font-size: 1.3rem;
  }
`;

export const ButtonSecondary = styled.button`
  height: 3.1rem;
  width: 7.5rem;
  font-size: 1rem;
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

  @media (max-width: 490px) {
    height: 2.5rem;
    width: 5.5rem;
    font-size: 0.7rem;
  }

  @media (min-width: 1024px) {
    height: 2.8rem;
    width: 6.8rem;
    font-size: 0.9rem;
  }

  @media (min-width: 1500px) {
    height: 3.5rem;
    width: 8rem;
    font-size: 1.2rem;
  }
`;

export const ButtonForm = styled.button`
  height: 3.5rem;
  width: 25rem;
  font-size: 1rem;
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

  @media (max-width: 768px) {
    height: 2.8rem;
    font-size: 0.95rem;
    padding: 0.7rem;
    max-width: 20rem;
  }

  @media (max-width: 480px) {
    height: 2.6rem;
    font-size: 0.9rem;
    padding: 0.6rem;
    max-width: 90%;
  }
`;

export const ButtonPagination = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--primary200);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary400);
  }

  &:disabled {
    background-color: var(--disabled);
    cursor: not-allowed;
  }

  &:active {
    background-color: var(--primary600);
  }

  @media (max-width: 390px) {
    height: 2rem;
    width: 4rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    height: 3rem;
    width: 6rem;
    font-size: 1.2rem;
  }

  @media (min-width: 1500px) {
    height: 3.5rem;
    width: 7rem;
    font-size: 1.3rem;
  }
`;

export const ButtonProfile = styled.button`
  height: 30px;
  width: 30px;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  user-select: none;
  background: url("https://loodibee.com/wp-content/uploads/Netflix-avatar-1.png")
    no-repeat center center/cover;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: 1px solid rgba(17, 17, 17, 0.3);
  }
`;

export const ButtonExit = styled.img`
  height: 25px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  user-select: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    filter: invert(1);
  }
`;

export const ButtonPlay = styled.button`
  position: absolute;
  bottom: 20px;
  left: 40px;
  height: 40px;
  width: 120px;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  border: none;
  transition: 0.3s;
  background-color: var(--secondary);

  &:hover {
    background-color: var(--primary400);
  }

  &:active {
    background-color: var(--primary600);
  }

  @media (max-width: 490px) {
    width: 100px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  height: 40px;
  top: 10px;
  width: 60px;
  border: none;
  font-weight: 600;
  border-radius: 5px;

  background-color: var(--primary200);
  transition: 0.3s;

  &:hover {
    background-color: var(--primary400);
  }

  &:active {
    background-color: var(--primary600);
  }
`;

export const SearchButton = styled.img`
  height: 30px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    filter: invert(1);
  }
`;
