import {useState, useRef} from "react";

function Security() {
  const spanRef = useRef(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
 
  const handleMouseMove = (e) => {
    const rect = spanRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
 
  const handleMouseLeave = () => setPos({ x: -999, y: -999 });
 
  return (
    <section style={{
      width: "100%", minHeight: "100vh", background: "#000",
      display: "flex", justifyContent: "center", alignItems: "center",
    }}>
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 60, width: "80%", textAlign: "center",
      }}>
        <img
          src="https://web-images.credcdn.in/v2/_next/assets/images/landing/datasafe.png"
          alt=""
          style={{ width: 100 }}
        />
        <p style={{
          fontFamily: "gilroy", fontSize: 27, fontWeight: 700,
          lineHeight: "36px", letterSpacing: "6px", color: "#fff",
          textTransform: "uppercase",
        }}>
          your data isn't our business. keeping it safe is.
        </p>
        <span
          ref={spanRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            fontFamily: "gilroy",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: "82px",
            letterSpacing: "0.69px",
            textAlign: "center",
            cursor: "default",
            display: "block",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "rgba(255, 255, 255, 0.24)",
            backgroundImage: `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px, rgb(255,255,255) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.15) 65%, transparent 100%)`,
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.05s linear",
          }}
        >
          all your personal data and <br />
          transactions are encrypted and <br />
          secured. there's no room for mistakes <br />
          because we didn't leave any.
        </span>
      </div>
    </section>
  );
}

export default Security;