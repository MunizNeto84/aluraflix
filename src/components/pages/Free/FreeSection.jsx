import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import extractVideoId from "../../../utils/extractVideoId";
import { VideoSection } from "../../../styles/Section/Section";
import {
  BackgroundDiv,
  VideoContainer,
  Video,
  VideoList,
  VideoThumbnail,
  Pagination,
} from "../../../styles/Div/Div";
import { Title, Text } from "../../../styles/Tittle/Tittle";
import { ButtonPagination } from "../../../styles/Button/Button";
import Footer from "../../default/Footer/Footer";

const FreeSection = () => {
  const [videoIds, setVideoIds] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);
  const [videosPerPage, setVideosPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        "https://api-aluraflix-wojl.onrender.com/api/v1/video/free"
      );

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const responseData = await response.json();

      if (!responseData?.totalRegistros) {
        throw new Error("Dados inválidos recebidos.");
      }

      const videosFree = await fetch(
        `https://api-aluraflix-wojl.onrender.com/api/v1/video/free?page=1&limit=${responseData.totalRegistros}`
      );

      if (!videosFree.ok) {
        throw new Error(`Erro na requisição: ${videosFree.status}`);
      }

      const data = await videosFree.json();

      if (!data?.conteudo) {
        throw new Error("Dados inválidos recebidos.");
      }

      const ids = data.conteudo
        .map((video) => ({
          id: extractVideoId(video.url),
          titulo: video.titulo,
          descricao: video.descricao,
        }))
        .filter((video) => video.id);

      setVideoIds(ids);
      if (ids.length > 0) setMainVideo(ids[0]);
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setVideosPerPage(16);
      } else if (window.innerWidth > 600) {
        setVideosPerPage(6);
      } else {
        setVideosPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIndex = currentPage * videosPerPage;
  const visibleVideos = videoIds.slice(startIndex, startIndex + videosPerPage);

  return (
    <BackgroundDiv>
      <VideoSection>
        <Title>Vídeos Gratuitos</Title>
        {mainVideo && (
          <Video>
            <Youtube
              videoId={mainVideo.id}
              opts={{ playerVars: { autoplay: 1, controls: 1, rel: 0, fs: 1 } }}
            />
            <Title>{mainVideo.titulo}</Title>
            <Text>{mainVideo.descricao}</Text>
          </Video>
        )}
        <VideoContainer>
          <VideoList>
            {visibleVideos.map((video, index) => (
              <VideoThumbnail
                key={index}
                className={mainVideo?.id === video.id ? "active" : ""}
                onClick={() => setMainVideo(video)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                  alt="Thumbnail"
                />
              </VideoThumbnail>
            ))}
          </VideoList>
          <Pagination>
            <ButtonPagination
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
            >
              Anterior
            </ButtonPagination>
            <ButtonPagination
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={startIndex + videosPerPage >= videoIds.length}
            >
              Próximo
            </ButtonPagination>
          </Pagination>
        </VideoContainer>
      </VideoSection>
      <Footer />
    </BackgroundDiv>
  );
};

export default FreeSection;
