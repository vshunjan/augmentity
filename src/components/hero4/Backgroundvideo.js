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
          src="https://upcdn.io/kW2K8W4/raw/AdobeStock_1200676359_Video_HD_Preview.mov" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
