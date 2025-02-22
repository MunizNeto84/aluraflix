import React, { useState, useEffect, useRef } from "react";
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
          }))
          .filter((video) => video.id);

        setVideoIds(ids);
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      }
    };

    fetchVideos();
  }, [categoria.id, token]);

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
            onClick={() => setSelectedVideo(video.id)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
              alt={video.titulo}
            />
          </CategoriaVideoThumbnail>
        ))}
      </CategoriaVideoList>
    </CategoriaItemContainer>
  );
};

export default CategoriaItem;
