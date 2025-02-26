import { useState, useEffect } from "react";
import extractVideoId from "./extractVideoId";

const useFetchVideos = (rota) => {
  const [videoIds, setVideoIds] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    const fetchVideosFree = async () => {
      try {
        const videosFree = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/${rota}`
        );

        if (!videosFree.ok) {
          throw new Error(`Erro na requisição: ${videosFree.status}`);
        }

        const response = await videosFree.json();

        if (!response?.totalRegistros) {
          throw new Error("Dados inválidos recebidos.");
        }

        const videosFreeTotal = await fetch(
          `https://api-aluraflix-wojl.onrender.com/api/v1/${rota}?page=1&limit=${response.totalRegistros}`
        );

        if (!videosFreeTotal.ok) {
          throw new Error(`Erro na requisição: ${videosFreeTotal.status}`);
        }

        const data = await videosFreeTotal.json();

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

    fetchVideosFree();
  }, []);

  return { videoIds, mainVideo, setMainVideo };
};

export default useFetchVideos;
