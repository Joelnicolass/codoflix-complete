import React from "react";

const YoutubeVideo = ({ src }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`${src}?controls=0&autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allowfullscreen
      allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default YoutubeVideo;
