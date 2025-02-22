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
`;

export const ButtonForm = styled.button`
  height: 3.1rem;
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

  @media (max-width: 480px) {
    width: 95%;
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
`;

export const ButtonProfile = styled.button`
  height: 30px;
  width: 30px;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
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
`;

export const CloseButton = styled.button`
  align-items: center;
  margin-top: 10px;
  margin-right: 20px;
  height: 40px;
  top: 10px;
  right: 10px;
  curso: poiter;
  width: 80px;
  color: white;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--primary200);
  transition: 0.3s;
  position: absolute;

  &:hover {
    background-color: var(--primary400);
  }

  &:active {
    background-color: var(--primary600);
  }
`;
