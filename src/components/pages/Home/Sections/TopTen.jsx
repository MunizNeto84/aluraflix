import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../../service/AuthContext";
import extractVideoId from "../../../../utils/extractVideoId";
import VideoMain from "./VideoMain";
import {
  TopTenContainer,
  TopTenVideoItem,
  TopTenVideoList,
} from "../../../../styles/Div/Div";
import { Numbers, TopTenTitle } from "../../../../styles/Tittle/Tittle";
import { ThumbnailPerfil } from "../../../../styles/Img/Img";

const TopTen = () => {
  const { token } = useAuth();
  const [topTenList, setTopTenList] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const videoListRef = useRef(null);
  const containerRef = useRef(null);
  const [videoData, setVideoData] = useState({
    id: null,
    idCategoria: null,
    idCanal: null,
    titulo: "",
    descricao: "",
  });
  const [scrollPosition, setScrollPosition] = useState(0);

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
          setTopTenList(data.getAll.conteudo || []);
        }
      } catch (error) {
        console.error("Erro ao buscar canal", error);
      }
    };

    fetchCanal();
  }, [token]);

  const handlePlayVideo = async (index) => {
    try {
      const canal = topTenList[index];

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
      const videoId = extractVideoId(video.url);

      if (videoId) {
        setVideoData({
          id: video.id,
          idCategoria: video.categoriaId,
          idCanal: video.canalId,
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

      setScrollPosition(newScrollPosition);
      videoListRef.current.style.transform = `translateX(-${newScrollPosition}px)`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && videoListRef.current) {
        const maxScroll =
          videoListRef.current.scrollWidth - containerRef.current.offsetWidth;
        setScrollPosition((prev) => Math.min(prev, maxScroll));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <TopTenContainer ref={containerRef} onMouseMove={handleMouseMove}>
        <TopTenTitle>🔟 - TOP 10</TopTenTitle>
        <TopTenVideoList
          ref={videoListRef}
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {topTenList.map((item) => (
            <TopTenVideoItem
              key={item.id}
              onClick={() => handlePlayVideo(topTenList.indexOf(item))}
            >
              <Numbers>{item.id}</Numbers>
              <ThumbnailPerfil src={item.urlPerfil} />
            </TopTenVideoItem>
          ))}
        </TopTenVideoList>

        <VideoMain
          videoUrl={videoUrl}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          idCategoria={videoData.idCategoria}
          idCanal={videoData.idCanal}
          titulo={videoData.titulo}
          descricao={videoData.descricao}
        />
      </TopTenContainer>
    </div>
  );
};

export default TopTen;
