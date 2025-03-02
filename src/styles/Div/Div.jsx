import styled from "styled-components";

export const BackgroundDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-bottom: 60px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("background.jpg") no-repeat center center/cover;

  @media (max-width: 390px) {
    footer {
      position: absolute;
    }
  }
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
  border-radius: 0.625rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);

  form {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1,
  p {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 520px) {
    padding: 0;
    margin: 0;
    gap: 0;
    width: 95%;
    max-width: 30rem;
    font-size: 0.875rem;

    h1,
    p {
      text-align: center;
      width: 95%;
      margin-left: 10px;
    }

    h1 {
      margin-top: 15px;
    }

    p {
      margin-bottom: 15px;
    }
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
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const CarrosselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CategoriaItemContainer = styled.div`
  position: relative;
  padding: 50px 10px 10px;
  width: 95%;
  max-width: 1200px;
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
  text-transform: uppercase;
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

export const VideoSection = styled.div`
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
}
`;

export const TopTenContainer = styled.div`
  position: relative;
  padding: 50px 10px 10px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopTenVideoList = styled.div`
  padding: 0 20px;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  transition: transform 0.2s ease-out;
`;

export const TopTenVideoItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchHomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  color: white;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

export const VideoCard = styled.div`
  background: var(--card);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: var(--modal);
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  width: 100%;
  height: 80%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 95%;
    height: auto;
  }
`;

export const VideoMainContent = styled.div`
  padding-right: 20px;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    padding-top: 56.25%;
    max-width: 70%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const RelatedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const RelatedVideosContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 15px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-right: 10px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const RelatedVideoList = styled.div`
  display: flex;
`;

export const RelatedVideoCard = styled.div`
  min-width: 120px;
  max-width: 180px;
  background: var(--card);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  text-align: center;
  color: white;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 3px solid var(--primary200);
  }

  p {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (min-width: 1024px) {
    width: 160px;
    height: auto;
  }
`;
