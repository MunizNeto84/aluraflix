import { Title, Subtitle } from "../../../../styles/Tittle/Tittle";
import {
  SearchContainer,
  CategoriaVideoThumbnail,
  VideoCard,
  VideoGrid,
} from "../../../../styles/Div/Div";
import { SearchThumbnail } from "../../../../styles/Img/Img";

const extractVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const Search = ({ videosBuscados }) => {
  if (videosBuscados.length === 0) return null;

  return (
    <SearchContainer>
      <Title>Resultados da Busca</Title>
      <VideoGrid>
        {videosBuscados.map((video) => (
          <VideoCard key={video.id}>
            <Subtitle>{video.titulo}</Subtitle>
            <CategoriaVideoThumbnail>
              <SearchThumbnail
                src={`https://img.youtube.com/vi/${extractVideoId(
                  video.url
                )}/mqdefault.jpg`}
                alt={video.titulo}
              />
            </CategoriaVideoThumbnail>
          </VideoCard>
        ))}
      </VideoGrid>
    </SearchContainer>
  );
};

export default Search;
