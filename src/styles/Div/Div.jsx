import styled from "styled-components";

export const BackgroundDiv = styled.div`
  postion: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)),
    url("background.jpg") no-repeat center center/cover;
  );
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background: linear-gradient(90deg, rgba(86, 8, 243, 1) 0%, rgba(67, 6, 193, 1) 35%, rgba(50, 4, 143, 1) 100%);
  }
`;
