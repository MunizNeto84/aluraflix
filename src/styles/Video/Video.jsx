import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  color: var(--text);
  max-width: 90%;
  width: 100%;
  min-height: 80vh;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 3rem;

  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
    max-width: 95%;
    height: auto;
  }
`;

export const VideoMainSection = styled.section`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    padding-right: 60px;
    flex-wrap: wrap;
    min-width: 550px;
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  width: 100%;
  text-align: center;

  h1,
  p {
    margin-top: 10px;
    max-width: 600px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--primary200);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const VideoListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  h1 {
    margin-top: 1rem;
  }

  @media (min-width: 1600px) {
    width: 80%;
    max-width: 1200px;
    padding: 2rem;
    align-self: center;
    flex: 2;
  }

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 900px;
    padding: 1.5rem;
    align-self: center;
    flex: 2;
  }

  @media (min-width: 768px) {
    width: 95%;
    max-width: 800px;
    padding: 1.5rem;
    align-self: center;
    flex: 1;
  }

  @media (max-width: 449px) {
    width: 100%;
    max-width: 100%;
    padding: 0.1rem;
    border-radius: 8px;
    align-self: center;
    flex: 1;
  }
`;

export const VideoList = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;

  max-width: 100%;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  @media (min-width: 900px) {
    width: auto;
  }

  @media (min-width: 1980px) {
    width: auto;
  }

  @media (max-width: 460px) {
    width: auto;
  }
`;

export const Thumbnail = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 3px solid transparent;
    object-fit: cover;
  }

  &.active img {
    border-color: var(--primary200);
  }
`;

export const VideoMainSectionModal = styled.section`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    padding-right: 60px;
    flex-wrap: wrap;
    min-width: 550px;
  }

  @media (min-width: 1500px) {
    width: 48%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoSectionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  color: var(--text);
  max-width: 90%;
  width: 100%;
  min-height: 80vh;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 3rem;
  background: var(--modal);

  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 95%;
    height: auto;
  }

  @media (min-width: 1500px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 990px) {
    padding: 15px;
    margin-top: 2rem;
  }

  @media (max-width: 490px) {
    max-width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 1rem;
  }
`;

export const VideoListModal = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const VideoListSectionModal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  h1 {
    margin-top: 1rem;
  }

  @media (min-width: 1600px) {
    width: 80%;
    max-width: 1200px;
    padding: 2rem;
    align-self: center;
    flex: 2;
  }

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 900px;
    padding: 1.5rem;
    align-self: center;
    flex: 2;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 490px) {
    padding: 0.1rem;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
  }
`;
