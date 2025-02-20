import styled from "styled-components";

export const BackgroundDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("background.jpg") no-repeat center center/cover;

  &::after {
    content: "";
    position: fixed;
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
  width: 90%;
  max-width: 34.3rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);

  form {
    width: 25rem;
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
    margin: 10px 5px;
    align-self: flex-start;
    text-align: left;
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 95%;
  max-width: 90%;
  border-radius: 10px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  width: 100%;
  margin: 0 auto;
  text-align: center;

  iframe {
    width: 100%;
    max-width: 650px;
    aspect-ratio: 16 / 9;
    border: 4px solid var(--primary200);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h1,
  p {
    margin-top: 10px;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    iframe {
      max-width: 100%;
    }
  }
`;

export const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const VideoThumbnail = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 110%;
    max-width: 650px;
    aspect-ratio: 16 / 9;
    border-radius: 5px;
    border: 3px solid transparent;
    object-fit: cover;
  }

  &.active img {
    border-color: var(--primary200);
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const CarrosselContainer = styled.div`
  position: relative;
`;

export const CategoriaItemContainer = styled.div`
  position: relative;
  padding: 40px 10px 10px;
  width: 95%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriaVideoList = styled.div`
  padding: 0 20px;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  gap: 10px;
  transition: transform 0.2s ease-out;
`;

export const CategoriaVideoThumbnail = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 160px;
    height: 120px;
    border-radius: 5px;
    border: 5px solid transparent;
  }

  &.active img {
    border-color: var(--primary200);
  }
`;

export const CategoriaTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;
