import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="video-container">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        style={{ width: "100%", height: "auto" }}
      >
        <source 
          src="https://upcdn.io/kW2K8W4/raw/about-video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
