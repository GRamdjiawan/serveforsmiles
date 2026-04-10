"use client"

import { useEffect, useRef } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    el.style.opacity = "0"
    el.style.transform = "translateY(12px)"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = "opacity 500ms ease-out, transform 500ms ease-out"
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .about-inner {
          width: 100%;
          padding: clamp(48px, 10vw, 80px) 28px clamp(56px, 10vw, 80px);
          position: relative;
        }
        .about-grid {
          display: block;
        }
        .about-left {}
        .about-right {
          margin-top: 24px;
        }
        /* Mobile: body/meta visible below left col */
        .about-body-mobile {
          display: block;
        }
        .about-body-desktop {
          display: none;
        }
        @media (min-width: 1024px) {
          .about-inner {
            padding: clamp(64px, 8vw, 96px) clamp(48px, 8vw, 120px);
          }
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(60px, 6vw, 100px);
            align-items: start;
          }
          .about-right {
            margin-top: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .about-meta {
            margin-top: auto;
          }
          .about-body-mobile {
            display: none;
          }
          .about-body-desktop {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="About"
        style={{ background: "#F7F8F3", width: "100%", maxWidth: "100%" }}
      >
        <div className="about-inner">
          <div className="about-grid">

            {/* Left column */}
            <div className="about-left">
              {/* Top rule */}
              <div style={{ height: "1px", background: "#E5E7EB", marginBottom: "24px" }} />

              {/* Neon dot accent */}
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#CBFF00",
                  float: "right",
                }}
              />

              {/* Label */}
              {/* <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "9.5px",
                  color: "#CBFF00",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                THE CONCEPT
              </div> */}

              {/* Headline */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(34px, 9vw, 52px)",
                  color: "#1A1F2E",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                More than
                <br />
                a tournament.
              </h2>

              {/* Neon bar */}
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "#CBFF00",
                  borderRadius: "100px",
                  margin: "16px 0 0",
                }}
              />

              {/* Body content — only shown on mobile inside left col */}
              <div className="about-body-mobile">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#6B7280",
                    margin: "24px 0 0",
                  }}
                >
                  Serve for Smiles brings padel, music and community together in one place.
                  Not a standard tournament — a day where you win, celebrate and meet new people.
                </p>
                <div style={{ height: "1px", background: "#E5E7EB", margin: "32px 0 20px" }} />
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "rgba(26,31,46,0.85)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  13 JUNE{" "}
                  <span style={{ color: "#CBFF00" }}>·</span>{" "}
                  ROTTERDAM{" "}
                  <span style={{ color: "#CBFF00" }}>·</span>{" "}
                  PADEL &amp; NETWORK
                </div>
              </div>
            </div>

            {/* Right column — desktop only */}
            <div className="about-body-desktop">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                Serve for Smiles brings padel, music and community together in one place.
                Not a standard tournament — a day where you win, celebrate and meet new people.
              </p>
              <div style={{ height: "1px", background: "#E5E7EB", margin: "32px 0 20px" }} />
              <div
                className="about-meta"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "rgba(26,31,46,0.85)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginTop: "auto",
                }}
              >
                13 JUNE{" "}
                <span style={{ color: "#CBFF00" }}>·</span>{" "}
                ROTTERDAM{" "}
                <span style={{ color: "#CBFF00" }}>·</span>{" "}
                PADEL &amp; NETWORK
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
