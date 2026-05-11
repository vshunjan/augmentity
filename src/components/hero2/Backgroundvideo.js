import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="video-container">
   <iframe
        src="https://player.mux.com/01QIelPYt01hh84998dCl00iBWMtVNhkWxOHrtP7qnZfC00?autoplay=muted&loop=true&playsinline=1"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          aspectRatio: "16/9",
          display: "block",
        }}
        loading="lazy"
        allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
        allowFullScreen
        title="About hero video"
      />
    </div>
  );
}




  