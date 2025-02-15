import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 1rem;
  text-align: center;
  color: var(--text);
`;

export const Container = styled.section`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const VideoSection = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text);
  min-height: calc(100vh - 100px);
  flex-grow: 1;
  overflow-x: hidden;
`;
