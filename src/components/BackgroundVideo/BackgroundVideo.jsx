import React from "react";

const BackgroundVideo = ({ src }) => {
  return (
    <video
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
      }}
      autoPlay
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
