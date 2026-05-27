import React from "react";


function Footer() {
  const cols = [
    { title: "UPGRADES", links: ["CRED money", "CRED mint", "CRED garage", "CRED cash+"] },
    { title: "PAYMENTS", links: ["Scan & Pay", "Tap to Pay", "Pay anyone", "RuPay cards on UPI"] },
    { title: "COMPANY", links: ["about CRED", "careers"] },
    { title: "RESOURCES", links: ["partner with us", "calculators", "articles", "tech blog", "customer care"] },
    { title: "POLICY", links: ["privacy policy", "terms and conditions", "security", "returns and refunds"] },
  ];
 
  return (
    <footer style={{
      background: "#000", color: "#fff",
      padding: "180px 100px", boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 30, minWidth: 200 }}>
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png"
            alt="CRED" style={{ width: 100 }}
          />
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png"
            alt="security" style={{ width: 310 }}
          />
          <p style={{
            fontFamily: "gilroy", fontSize: 20, fontWeight: 600,
            letterSpacing: "0.8px", color: "#fff", opacity: 0.8,
          }}>complete security. no asterisks.</p>
          <p style={{
            fontFamily: "gilroy", fontSize: 20, fontWeight: 500,
            lineHeight: "32px", color: "#fff", opacity: 0.3, maxWidth: 400,
          }}>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
        </div>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap", flex: 1 }}>
          {cols.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span style={{
                fontFamily: "gilroy", fontSize: 20, fontWeight: 600,
                letterSpacing: "6px", color: "rgba(255,255,255,0.8)",
              }}>{col.title}</span>
              {col.links.map((link) => (
                <a key={link} href="#" style={{
                  fontFamily: "gilroy", fontSize: 20, fontWeight: 500,
                  lineHeight: "44px", color: "rgba(255,255,255,0.3)",
                  textDecoration: "none", letterSpacing: "0.3px",
                }}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.2)",
        marginTop: 80, paddingTop: 40,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: "gilroy", fontSize: 20, opacity: 0.25, color: "#fff" }}>
          copyright © 2020-26 Dreamplug Technologies Pvt Ltd.
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["privacy policy", "terms and conditions"].map((t) => (
            <a key={t} href="#" style={{
              fontFamily: "gilroy", fontSize: 20, fontWeight: 500,
              color: "#fff", opacity: 0.3, textDecoration: "none",
              paddingRight: 20, borderRight: "1px solid rgba(255,255,255,0.3)",
            }}>{t}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;