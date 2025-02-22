import { Title, Subtitle } from "../../../../styles/Tittle/Tittle";
import {
  CategoriaVideoThumbnail,
  SearchContainer,
  SearchVideoItem,
} from "../../../../styles/Div/Div";

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
      <Title>Resultados da Busca:</Title>
      {videosBuscados.map((video) => (
        <SearchVideoItem key={video.id}>
          <Subtitle>{video.titulo}</Subtitle>
          <CategoriaVideoThumbnail>
            <img
              src={`https://img.youtube.com/vi/${extractVideoId(
                video.url
              )}/default.jpg`}
              alt="video"
            />
          </CategoriaVideoThumbnail>
        </SearchVideoItem>
      ))}
    </SearchContainer>
  );
};

export default Search;
