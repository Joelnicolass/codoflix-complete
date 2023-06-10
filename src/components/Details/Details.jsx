import React from "react";
import useSWR from "swr";
import { getMovieVideos } from "../../services/tmdb.services";
import { Text } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import notFoundSrc from "../../assets/not_found.json";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const Details = ({ id, title }) => {
  const { data: movieVideos, isLoading: movieVideosIsLoading } = useSWR(
    "getMovieVideo" + id,
    () => getMovieVideos(id)
  );

  const youtubeUrl = "https://www.youtube.com/embed/";
  const youtubeVideo = movieVideos?.results[0]?.key;

  const isLoading = movieVideosIsLoading && !youtubeVideo;
  const hasError = !movieVideosIsLoading && !youtubeVideo;
  const hasData = !movieVideosIsLoading && youtubeVideo;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text h3>{title}</Text>

      {isLoading && <Text>Buscando...</Text>}
      {hasError && (
        <div>
          <Text>No se encontro el video</Text>
          <Player
            autoplay
            loop
            src={notFoundSrc}
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      )}

      {hasData && <YoutubeVideo src={`${youtubeUrl}${youtubeVideo}`} />}
    </div>
  );
};

export default Details;
