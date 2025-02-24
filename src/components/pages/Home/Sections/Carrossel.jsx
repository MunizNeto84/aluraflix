import { useState, useEffect } from "react";
import { useAuth } from "../../../../service/AuthContext";
import extractVideoId from "../../../../utils/extractVideoId";
import VideoMain from "./VideoMain";
import { CarrosselContainer } from "../../../../styles/Div/Div";
import { Img, ImgLogo } from "../../../../styles/Img/Img";
import { ButtonPlay } from "../../../../styles/Button/Button";

const Carrossel = () => {
  const { token } = useAuth();
  const [carrossel, setCarrossel] = useState([]);
  const [index, setIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState({
    id: null,
    idCategoria: null,
    idCanal: null,
    titulo: "",
    descricao: "",
  });

  useEffect(() => {
    const fetchCanal = async () => {
      try {
        const response = await fetch(
          "https://api-aluraflix-wojl.onrender.com/api/v1/canal/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCarrossel(data.getAll.conteudo);
        }
      } catch (error) {
        console.error("Erro ao buscar canal", error);
      }
    };
    fetchCanal();
  }, []);

  useEffect(() => {
    if (carrossel.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * carrossel.length);
          } while (newIndex === prevIndex);
          return newIndex;
        });
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [carrossel]);

  const handlePlayVideo = async () => {
    try {
      const canal = carrossel[index];

      const response = await fetch(
        `https://api-aluraflix-wojl.onrender.com/api/v1/canal/${canal?.id}/video`,
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

      if (!data.conteudo || data.conteudo.length === 0) {
        console.error("Nenhum vídeo encontrado para esse canal.");
        return;
      }

      const video = data.conteudo[0];
      const videoUrl = video.url;
      const videoId = extractVideoId(videoUrl);

      if (videoId) {
        setVideoData({
          id: video.id,
          idCategoria: video.idCategoria,
          idCanal: canal.id,
          titulo: video.titulo,
          descricao: video.descricao,
        });

        setVideoUrl(videoId);
        setShowVideo(true);
      } else {
        console.error("Erro ao extrair ID do vídeo.");
      }
    } catch (error) {
      console.error("Erro ao buscar vídeos do canal", error);
    }
  };

  return (
    <CarrosselContainer>
      {carrossel[index] && (
        <>
          <Img src={carrossel[index].urlCarrossel} alt="Capa do canal" />
          <ImgLogo src={carrossel[index].urlLogo} alt="Logo do canal" />
          <ButtonPlay onClick={handlePlayVideo}>Assistir</ButtonPlay>
        </>
      )}

      <VideoMain
        videoUrl={videoUrl}
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        id={videoData.id}
        idCategoria={videoData.idCategoria}
        idCanal={videoData.idCanal}
        titulo={videoData.titulo}
        descricao={videoData.descricao}
      />
    </CarrosselContainer>
  );
};

export default Carrossel;
