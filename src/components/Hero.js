import React from "react";


function Hero() {
  return (
    <div className="hero">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
      ></video>

      <div className="hero-content">
        <h1>
          crafted for the <br />
          creditworthy
        </h1>

        <p>
          CRED is members-only that enables the <br />
          trustworthy to make financial progress
        </p>
      </div>
    </div>
  );
}

export default Hero;