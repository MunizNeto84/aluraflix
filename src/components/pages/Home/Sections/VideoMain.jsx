import { useState, useEffect } from "react";
import { useAuth } from "../../../../service/AuthContext";
import extractVideoId from "../../../../utils/extractVideoId";
import Youtube from "react-youtube";

import { Pagination, RelatedVideoCard } from "../../../../styles/Div/Div";
import {
  CloseButton,
  ButtonPagination,
} from "../../../../styles/Button/Button";
import { Subtitle, Title, Text } from "../../../../styles/Tittle/Tittle";
import {
  VideoSectionModal,
  Modal,
  VideoMainSection,
  Video,
  VideoWrapper,
  VideoListSectionModal,
  VideoListModal,
} from "../../../../styles/Video/Video";

const customUpdatePagination = (setVideosPerPage) => {
  if (window.innerWidth > 1500) {
    setVideosPerPage(9);
  } else if (window.innerWidth > 600) {
    setVideosPerPage(3);
  } else {
    setVideosPerPage(2);
  }
};

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
  const [tituloAtual, setTituloAtual] = useState(titulo);
  const [descricaoAtual, setDescricaoAtual] = useState(descricao);

  const [videosPerPage, setVideosPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updatePagination = () => {
      customUpdatePagination(setVideosPerPage);
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);

    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!idCanal) return;

      try {
        const videosCanal = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/canal/${idCanal}/video`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!videosCanal.ok) {
          console.error("Erro ao buscar vídeos.");
          return;
        }

        const response = await videosCanal.json();

        if (!response?.totalRegistros) {
          throw new Error("Dados inválidos recebidos.");
        }

        const videosTotal = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/canal/${idCanal}/video?page=1&limit=${response.totalRegistros}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!videosTotal.ok) {
          throw new Error(`Erro na requisição: ${videosTotal.status}`);
        }

        const data = await videosTotal.json();
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
    setTituloAtual(titulo);
    setDescricaoAtual(descricao);
  }, [videoUrl, showVideo, titulo, descricao]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = relatedVideos.slice(startIndex, endIndex);

  return showVideo ? (
    <VideoSectionModal>
      <Modal>
        <VideoMainSection>
          <Video>
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
            <Title>{tituloAtual}</Title>
            <Text>{descricaoAtual}</Text>
          </Video>
        </VideoMainSection>
        <VideoListSectionModal>
          <Subtitle>Vídeos Relacionados</Subtitle>
          <VideoListModal>
            {currentVideos.map((video) => {
              const videoId = extractVideoId(video.url);
              return (
                <RelatedVideoCard
                  key={video.id}
                  onClick={() => {
                    setShowVideo(true);
                    setCurrentVideoUrl(videoId);
                    setTituloAtual(video.titulo);
                    setDescricaoAtual(video.descricao);
                  }}
                >
                  <img src={canalImagem} alt={video.titulo} />
                  <p>{video.titulo}</p>
                </RelatedVideoCard>
              );
            })}
          </VideoListModal>
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
        </VideoListSectionModal>
        <CloseButton onClick={() => setShowVideo(false)}>X</CloseButton>
      </Modal>
    </VideoSectionModal>
  ) : null;
};

export default VideoMain;
