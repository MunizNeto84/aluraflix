import React, { useState, useEffect, useRef } from "react";
import VideoMain from "./VideoMain";
import {
  CategoriaItemContainer,
  CategoriaVideoList,
  CategoriaVideoThumbnail,
  CategoriaTitle,
} from "../../../../styles/Div/Div";

const extractVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const CategoriaItem = ({
  categoria,
  token,
  selectedVideo,
  setSelectedVideo,
}) => {
  const [videoIds, setVideoIds] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [videoData, setVideoData] = useState({
    id: null,
    idCategoria: null,
    idCanal: null,
    titulo: "",
    descricao: "",
  });
  const videoListRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.1;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/categoria/${categoria.id}/video?page=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        if (!data?.conteudo?.length) {
          throw new Error("Nenhum vídeo encontrado.");
        }

        const ids = data.conteudo
          .map((video) => ({
            id: extractVideoId(video.url),
            titulo: video.titulo,
            url: video.id,
          }))
          .filter((video) => video.id);

        setVideoIds(ids);
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      }
    };

    fetchVideos();
  }, [categoria.id, token]);

  const handlePlayVideo = async (videoId) => {
    try {
      const response = await fetch(
        `https://api-aluraflix-wojl.onrender.com/api/v1/video/${videoId}`,
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

      const video = await response.json();

      if (!video.url) {
        console.error("Nenhum vídeo encontrado.");
        return;
      }

      const videoUrl2 = video.url;

      const videoURL = extractVideoId(videoUrl2);

      if (videoURL) {
        setVideoData({
          id: video.id,
          idCategoria: video.categoriaId,
          idCanal: video.canalId,
          titulo: video.titulo,
          descricao: video.descricao,
        });
      }

      setVideoUrl(videoURL);
      setShowVideo(true);
    } catch (error) {
      console.error("Erro ao buscar vídeo da categoria", error);
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current && videoListRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const mouseX = e.clientX - containerRef.current.offsetLeft;
      const scrollPercent = mouseX / containerWidth;

      const maxScroll = videoListRef.current.scrollWidth - containerWidth;
      const newScrollPosition = Math.min(
        Math.max(0, maxScroll * scrollPercent),
        maxScroll
      );

      setScrollPosition((prevPosition) => {
        return (
          prevPosition + (newScrollPosition - prevPosition) * scrollSpeed * 0.1
        );
      });

      videoListRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const handleResize = () => {
        const maxScroll =
          videoListRef.current.scrollWidth - containerRef.current.offsetWidth;
        setScrollPosition(Math.min(scrollPosition, maxScroll));
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [scrollPosition]);

  return (
    <CategoriaItemContainer ref={containerRef} onMouseMove={handleMouseMove}>
      <CategoriaTitle>{categoria.titulo || "Categoria"}</CategoriaTitle>
      <CategoriaVideoList ref={videoListRef}>
        {videoIds.map((video, index) => (
          <CategoriaVideoThumbnail
            key={index}
            className={selectedVideo === video.id ? "active" : ""}
            onClick={() => {
              setSelectedVideo(video.id);
              handlePlayVideo(video.url);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
              alt={video.titulo}
            />
          </CategoriaVideoThumbnail>
        ))}
      </CategoriaVideoList>
      <VideoMain
        videoUrl={videoUrl}
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        idCategoria={videoData.idCategoria}
        idCanal={videoData.idCanal}
        titulo={videoData.titulo}
        descricao={videoData.descricao}
      />
    </CategoriaItemContainer>
  );
};

export default CategoriaItem;
