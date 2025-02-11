import styled from "styled-components";

export const BackgroundDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("background.jpg") no-repeat center center/cover;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(86, 8, 243, 1) 0%,
      rgba(67, 6, 193, 1) 35%,
      rgba(50, 4, 143, 1) 100%
    );
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 37.5rem;
  width: 34.3rem;
  padding: 50px 80px;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    align-self: flex-start;
    text-align: left;
    width: 100%;
  }

  p {
    margin: 0 10px;
    align-self: flex-start;
    text-align: left;
    width: 100%;
  }
`;
