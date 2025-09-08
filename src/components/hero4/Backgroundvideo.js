import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="video-container index-page">
<iframe
  src="https://www.youtube.com/embed/5_fK8x0AZUc?autoplay=1&mute=1&loop=1&playlist=5_fK8x0AZUc&controls=0&modestbranding=1&rel=0"
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 11, // background
  }}
/>


    </div>
  );
}
