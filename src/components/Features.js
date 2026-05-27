import React from "react";

const featuresData = [
  {
    img: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png",
    title: "scan & pay \n any UPI QR",
  },
  {
    img: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rupay-logo-final.png",
    title: "UPI payments. \n on credit.",
  },
  {
    img: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tnp-logo-final.png",
    title: "tap your phone. \n pay on credit.",
  },
  {
    img: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p-logo-final.png",
    title: "send money to \n any UPI app",
  },
  {
    img: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage-logo-final.png",
    title: "manage your \n cars' vitals",
  },
];

function Features() {
  return (
    <section className="features">
      <h1>upgrade your life bit by bit</h1>
    <div className="cards-container">
      <div className="cards">
        {featuresData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt="" />

            <p>
              {item.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <span>
              KNOW MORE
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 7H17V15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Features;