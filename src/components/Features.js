import React from "react";

const featuresData = [
  {
    logo: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/scan-n-pay.png",
    title: "scan & pay\nany UPI QR",
  },
  {
    logo: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rupay-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cc-on-upi.png",
    title: "UPI payments.\non credit.",
  },
  {
    logo: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tnp-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tap-n-pay.png",
    title: "tap your phone.\npay on credit.",
  },
  {
    logo: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p.png",
    title: "send money to\nany UPI app",
  },
  {
    logo: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage-logo-final.png",
    bg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage.png",
    title: "manage your\ncars' vitals",
  },
];

function Features() {
  return (
    <section className="features">
      <h1>upgrade your life bit by bit</h1>
    <div className="cards-container">
      <div className="cards">
        {featuresData.map((item, index) => (
          <div className="card" key={index} style={{backgroundImage: `url(${item.bg})`,}}>
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