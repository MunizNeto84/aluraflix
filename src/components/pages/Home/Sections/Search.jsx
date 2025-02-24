import { useState } from "react";
import extractVideoId from "../../../../utils/extractVideoId";
import { Title, Subtitle } from "../../../../styles/Tittle/Tittle";
import {
  SearchContainer,
  CategoriaVideoThumbnail,
  VideoCard,
  VideoGrid,
} from "../../../../styles/Div/Div";
import { SearchThumbnail } from "../../../../styles/Img/Img";
import VideoMain from "./VideoMain";

const Search = ({ videosBuscados }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState(null);

  if (videosBuscados.length === 0) return null;

  return (
    <SearchContainer>
      <Title>Resultados da Busca</Title>
      <VideoGrid>
        {videosBuscados.map((video) => {
          const videoId = extractVideoId(video.url);

          return (
            <VideoCard key={video.id}>
              <Subtitle>{video.titulo}</Subtitle>
              <CategoriaVideoThumbnail>
                <SearchThumbnail
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt={video.titulo}
                  onClick={() => {
                    setVideoSelecionado(video);
                    setShowVideo(true);
                  }}
                />
              </CategoriaVideoThumbnail>
            </VideoCard>
          );
        })}
      </VideoGrid>

      {videoSelecionado && (
        <VideoMain
          videoUrl={extractVideoId(videoSelecionado.url)}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          idCategoria={videoSelecionado.categoriaId}
          idCanal={videoSelecionado.canalId}
          titulo={videoSelecionado.titulo}
          descricao={videoSelecionado.descricao}
        />
      )}
    </SearchContainer>
  );
};

export default Search;
