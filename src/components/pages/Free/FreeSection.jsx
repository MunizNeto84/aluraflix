import Youtube from "react-youtube";
import useFetchVideos from "../../../utils/fetch";
import usePagination from "../../../utils/pagination";

import { BackgroundDiv, Pagination } from "../../../styles/Div/Div";
import {
  VideoContainer,
  VideoMainSection,
  VideoListSection,
  Video,
  VideoWrapper,
  VideoList,
  ThumbnailWrapper,
  Thumbnail,
} from "../../../styles/Video/Video";

import { Title, Text } from "../../../styles/Tittle/Tittle";
import { ButtonPagination } from "../../../styles/Button/Button";
import Footer from "../../default/Footer/Footer";

const FreeSection = () => {
  const { videoIds, mainVideo, setMainVideo } = useFetchVideos("video/free");
  const { videosPerPage, currentPage, setCurrentPage } = usePagination();

  const startIndex = currentPage * videosPerPage;
  const visibleVideos = videoIds.slice(startIndex, startIndex + videosPerPage);

  return (
    <BackgroundDiv>
      <VideoContainer>
        <VideoMainSection>
          {mainVideo && (
            <Video>
              <VideoWrapper>
                <Youtube
                  videoId={mainVideo.id}
                  opts={{
                    playerVars: { autoplay: 1, controls: 1, rel: 0, fs: 1 },
                  }}
                />
              </VideoWrapper>
              <Title>{mainVideo.titulo}</Title>
              <Text>{mainVideo.descricao}</Text>
            </Video>
          )}
        </VideoMainSection>
        <VideoListSection>
          <Title>Mais vídeos gratuitos</Title>
          <VideoList>
            {visibleVideos.map((video, index) => (
              <ThumbnailWrapper key={index}>
                <Thumbnail
                  className={mainVideo?.id === video.id ? "active" : ""}
                  onClick={() => setMainVideo(video)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                    alt="Thumbnail"
                  />
                </Thumbnail>
              </ThumbnailWrapper>
            ))}
          </VideoList>
          <Pagination>
            <ButtonPagination
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
            >
              Anterior
            </ButtonPagination>
            <ButtonPagination
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={startIndex + videosPerPage >= videoIds.length}
            >
              Próximo
            </ButtonPagination>
          </Pagination>
        </VideoListSection>
      </VideoContainer>
      <Footer />
    </BackgroundDiv>
  );
};

export default FreeSection;
