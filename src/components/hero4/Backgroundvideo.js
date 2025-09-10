import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="video-container index-page">
 <iframe
  src="https://player.mux.com/rcaeAjdyzHffzOys9gH025XcBatj7j6wDGkcvqWwGHPM?autoplay=1&muted=true&loop=true&metadata-video-title=AdobeStock_1200676359_FHD&video-title=AdobeStock_1200676359_FHD&accent-color=%23040101"
  style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
  allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
  allowFullScreen
  title="Mux Video"
  className="desktop-vdo"
/>
<iframe
  src="https://player.mux.com/NqrRxGMICbSMVqKLo02qTKOE02oSTPaL3X01l5snA8fdx4?metadata-video-title=AdobeStock_1200676359_FHD+Vertical&video-title=AdobeStock_1200676359_FHD+Vertical&accent-color=%23040101&autoplay=1&muted=1&loop=1"
  style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
  allow="autoplay; fullscreen; accelerometer; gyroscope; encrypted-media; picture-in-picture"
  allowFullScreen
  title="Mux Video"
  className="mobile-vdo"
/>



    </div>
  );
}
