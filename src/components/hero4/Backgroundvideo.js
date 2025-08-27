import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="video-container">
  <iframe
  src="https://player.mux.com/Qaxk1tMQJ5k6G00CPenQTkX011ZN6EayWc3VjPIyRpdtE?autoplay=1&muted=1&loop=1"
  style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
  allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
  allowFullScreen
  title="Mux Video"
/>

    </div>
  );
}
