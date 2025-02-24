import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../../service/AuthContext";
import extractVideoId from "../../../../utils/extractVideoId";
import Youtube from "react-youtube";
import {
  Pagination,
  VideoSection,
  Modal,
  VideoMainContent,
  RelatedVideoCard,
  VideoWrapper,
  RelatedVideoList,
  RelatedContent,
  RelatedVideosContainer,
} from "../../../../styles/Div/Div";
import {
  CloseButton,
  ButtonPagination,
} from "../../../../styles/Button/Button";
import {
  TitleRelated,
  Subtitle,
  Description,
} from "../../../../styles/Tittle/Tittle";

const VideoMain = ({
  videoUrl,
  showVideo,
  setShowVideo,
  idCanal,
  titulo,
  descricao,
}) => {
  const { token } = useAuth();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [canalImagem, setCanalImagem] = useState("");
  const [currentVideoUrl, setCurrentVideoUrl] = useState(videoUrl);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(3);
  const containerRef = useRef(null);
  const videoListRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!idCanal) return;

      try {
        const response = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/canal/${idCanal}/video`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Erro ao buscar vídeos.");
          return;
        }

        const data = await response.json();
        if (
          !data.conteudo ||
          !Array.isArray(data.conteudo) ||
          data.conteudo.length === 0
        ) {
          console.error("Nenhum vídeo encontrado para esse canal.");
          return;
        }

        const canalResponse = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/canal/${idCanal}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!canalResponse.ok) {
          console.error("Erro ao buscar dados do canal.");
          return;
        }

        const canalData = await canalResponse.json();
        setCanalImagem(canalData.urlCapa);

        setRelatedVideos(data.conteudo);
      } catch (error) {
        console.error("Erro ao buscar vídeos do canal", error);
      }
    };

    fetchVideos();
  }, [idCanal, token]);

  useEffect(() => {
    if (!videoUrl || !showVideo) {
      return;
    }

    setCurrentVideoUrl(videoUrl);
  }, [videoUrl, showVideo]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const updateVideosPerPage = () => {
      if (window.innerWidth < 768) {
        setVideosPerPage(4);
      } else {
        setVideosPerPage(Math.floor(window.innerWidth / 220));
      }
    };

    updateVideosPerPage();
    window.addEventListener("resize", updateVideosPerPage);

    return () => {
      window.removeEventListener("resize", updateVideosPerPage);
    };
  }, []);

  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = relatedVideos.slice(startIndex, endIndex);

  return showVideo ? (
    <VideoSection>
      <Modal>
        <VideoMainContent>
          <TitleRelated>{titulo}</TitleRelated>
          <VideoWrapper>
            <Youtube
              videoId={currentVideoUrl}
              opts={{
                playerVars: {
                  autoplay: 1,
                  mute: 0,
                  controls: 1,
                  rel: 0,
                  fs: 1,
                },
              }}
            />
          </VideoWrapper>
          <Description>{descricao}</Description>
        </VideoMainContent>

        <RelatedContent>
          <Subtitle style={{ color: "#fff", marginBottom: "10px" }}>
            Vídeos Relacionados
          </Subtitle>
          <RelatedVideosContainer ref={containerRef}>
            <RelatedVideoList ref={videoListRef}>
              {currentVideos.map((video) => {
                const videoId = extractVideoId(video.url);
                return (
                  <RelatedVideoCard
                    key={video.id}
                    onClick={() => {
                      setShowVideo(true);
                      setCurrentVideoUrl(videoId);
                    }}
                  >
                    <img src={canalImagem} alt={video.titulo} />
                    <p>{video.titulo}</p>
                  </RelatedVideoCard>
                );
              })}
            </RelatedVideoList>
          </RelatedVideosContainer>

          <Pagination>
            <ButtonPagination
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </ButtonPagination>
            <ButtonPagination
              onClick={handleNextPage}
              disabled={endIndex >= relatedVideos.length}
            >
              Próximo
            </ButtonPagination>
          </Pagination>
        </RelatedContent>
        <CloseButton onClick={() => setShowVideo(false)}>X</CloseButton>
      </Modal>
    </VideoSection>
  ) : null;
};

export default VideoMain;
