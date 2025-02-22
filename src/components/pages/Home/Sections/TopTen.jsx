import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../../service/AuthContext";
import VideoMain from "./VideoMain";
import {
  TopTenContainer,
  TopTenVideoItem,
  TopTenVideoList,
} from "../../../../styles/Div/Div";
import { Numbers, TopTenTitle } from "../../../../styles/Tittle/Tittle";
import { ThumbnailPerfil } from "../../../../styles/Img/Img";

const extractVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const TopTen = () => {
  const { token } = useAuth();
  const [topTenList, setTopTenList] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const videoListRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.1;

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

      const data = await response.json();

      if (!data.url) {
        console.error("Nenhum vídeo encontrado.");
        return;
      }

      const videoURL = extractVideoId(data.url);
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
        <TopTenVideoList ref={videoListRef}>
          {topTenList.map((item) => (
            <TopTenVideoItem
              key={item.id}
              onClick={() => handlePlayVideo(item.id)}
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
        />
      </TopTenContainer>
    </div>
  );
};

export default TopTen;
