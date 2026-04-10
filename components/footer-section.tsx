export default function FooterSection() {
  return (
    <footer
      aria-label="Footer"
      style={{
        background: "#1A1F2E",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <style>{`
        .footer-inner {
          padding: 48px 28px;
          text-align: center;
        }
        .footer-ig-link {
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          transition: opacity 150ms ease, text-decoration 150ms ease;
        }
        .footer-ig-link:hover {
          opacity: 1 !important;
          text-decoration: underline;
        }
        @media (min-width: 1024px) {
          .footer-inner {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            padding: 48px clamp(48px, 8vw, 120px) !important;
            text-align: left !important;
          }
          .footer-mobile-center {
            text-align: left !important;
          }
          .footer-right {
            text-align: right !important;
          }
          .footer-date-mobile {
            display: none !important;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-mobile-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(20px, 3vw, 22px)",
              color: "#CBFF00",
              margin: 0,
            }}
          >
            Serve for Smiles
          </p>

          {/* Date — visible on mobile only */}
          <p
            className="footer-date-mobile"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "11px",
              color: "rgba(255,255,255,0.42)",
              marginTop: "12px",
              marginBottom: "16px",
            }}
          >
            13 June · Rotterdam
          </p>

          {/* Socials — mobile below brand */}
          <div
            className="footer-socials-mobile"
            style={{ marginTop: "14px" }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .footer-socials-mobile { display: none !important; }
                .footer-right { display: block !important; }
              }
            `}</style>
            <a
              href="https://instagram.com/serveforsmiles"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig-link"
            >
              @serveforsmiles
            </a>
            {" · "}
            <a
              href="https://instagram.com/padelxhousefest"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig-link"
            >
              @padelxhousefest
            </a>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "10px",
                color: "rgba(255,255,255,0.25)",
                marginTop: "10px",
              }}
            >
              In collaboration with Padel × House Fest
            </p>
          </div>
        </div>

        {/* Right column — desktop only */}
        <div
          className="footer-right"
          style={{ display: "none", textAlign: "right" }}
        >
          <div>
            <a
              href="https://instagram.com/serveforsmiles"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig-link"
            >
              @serveforsmiles
            </a>
            {" · "}
            <a
              href="https://instagram.com/padelxhousefest"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-ig-link"
            >
              @padelxhousefest
            </a>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
              marginTop: "6px",
            }}
          >
            In collaboration with Padel × House Fest
          </p>
        </div>
      </div>

      {/* Bottom rule + copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          margin: "0 auto",
          width: "calc(100% - 56px)",
          paddingTop: "16px",
          paddingBottom: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "10px",
            color: "rgba(255,255,255,0.18)",
            margin: 0,
          }}
        >
          &copy; 2026 Serve for Smiles
        </p>
      </div>
    </footer>
  )
}
