"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const labelRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const simpleItems: Array<{ el: HTMLElement | null; delay: number }> = [
      { el: labelRef.current, delay: 0 },
      { el: badgeRef.current, delay: 900 },
      { el: ctaRef.current, delay: 1100 },
    ]

    simpleItems.forEach(({ el, delay }) => {
      if (!el) return
      el.style.opacity = "0"
      el.style.transform = "translateY(10px)"
      setTimeout(() => {
        el.style.transition =
          "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, delay)
    })

    const animateWords = (spanEl: HTMLSpanElement | null, baseDelay: number) => {
      if (!spanEl) return
      const words = spanEl.querySelectorAll<HTMLSpanElement>(".word")
      words.forEach((word, i) => {
        word.style.opacity = "0"
        word.style.transform = "translateY(48%) scaleY(1.08)"
        word.style.transformOrigin = "bottom center"
        word.style.display = "inline-block"
        setTimeout(() => {
          word.style.transition =
            "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
          word.style.opacity = "1"
          word.style.transform = "translateY(0) scaleY(1)"
        }, baseDelay + i * 120)
      })
    }

    animateWords(line1Ref.current, 200)
    animateWords(line2Ref.current, 480)

    // Smiles. rubber band: slow stretch → fast compress past origin → quick settle
    const line2El = line2Ref.current
    if (line2El) {
      const stretchDelay = 480 + 1 * 120 + 700 + 120
      setTimeout(() => {
        // Phase 1: slow lazy stretch out
        line2El.style.transition = "transform 700ms cubic-bezier(0.25, 0, 0.5, 1)"
        line2El.style.transform = "scaleX(1.16)"

        // Phase 2: snap compress — fast, goes slightly under 1 like a real rubber band
        setTimeout(() => {
          line2El.style.transition = "transform 180ms cubic-bezier(0.4, 0, 0.6, 1)"
          line2El.style.transform = "scaleX(0.94)"

          // Phase 3: quick settle back to natural — tiny overshoot to 1.02 then rests
          setTimeout(() => {
            line2El.style.transition = "transform 320ms cubic-bezier(0.34, 1.2, 0.64, 1)"
            line2El.style.transform = "scaleX(1)"
          }, 180)
        }, 700)
      }, stretchDelay)
    }
  }, [])

  useEffect(() => {
    const scrollEl = document.querySelector("main") as HTMLElement | null
    if (!scrollEl || !bgRef.current) return

    const onScroll = () => {
      if (!bgRef.current) return
      bgRef.current.style.transform = `translateY(${scrollEl.scrollTop * 0.3}px)`
    }

    scrollEl.addEventListener("scroll", onScroll, { passive: true })
    return () => scrollEl.removeEventListener("scroll", onScroll)
  }, [])

  const wrapWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word" style={{ marginRight: "0.22em" }}>
        {word}
      </span>
    ))

  const imgUrl =
    "https://images.unsplash.com/photo-1646649853703-7645147474ba?w=1400&q=85&fit=crop&crop=center"

  const dotStyle: React.CSSProperties = {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#CBFF00",
    flexShrink: 0,
    display: "inline-block",
  }

  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0%   { box-shadow: 0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22); }
          50%  { box-shadow: 0 0 52px rgba(203,255,0,0.75), 0 6px 28px rgba(203,255,0,0.45); }
          100% { box-shadow: 0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22); }
        }

        // .sfs-btn {
        //   position: relative;
        //   display: block;
        //   width: 100%;
        //   max-width: 260px;
        //   height: 54px;
        //   background: #CBFF00;
        //   border: none;
        //   border-radius: 100px;
        //   color: #1A1F2E;
        //   font-family: var(--font-body);
        //   font-weight: 700;
        //   font-size: 15px;
        //   cursor: pointer;
        //   box-shadow: 0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22);
        //   transition: transform 150ms ease-out, box-shadow 150ms ease-out;
        //   overflow: hidden;
        //   text-align: center;
        //   line-height: 54px;
        // }

        .sfs-btn {
          position: relative;
          display: block;
          width: 100%;
          max-width: 260px;
          height: 54px;
          background: #344100;
          border: none;
          border-radius: 100px;
          color: #FFFFFF;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 0 28px rgba(95, 119, 0, 0.45), 0 4px 14px rgba(111, 138, 0, 0.22);
          transition: transform 150ms ease-out, box-shadow 150ms ease-out;
          overflow: hidden;
          text-align: center;
          line-height: 54px;
        }

        .sfs-btn:hover {
          transform: scale(1.025);
          box-shadow: 0 0 40px rgba(203,255,0,0.65), 0 6px 20px rgba(203,255,0,0.35);
        }

        .sfs-btn-fill {
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: #1A1F2E;
          transform: translateX(-110%);
          transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
          pointer-events: none;
        }

        // .sfs-btn:hover .sfs-btn-fill {
        //   transform: translateX(0%);
        // }

        .sfs-btn-label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 100%;
          transition: color 420ms cubic-bezier(0.22, 1, 0.36, 1);
          color: #ffffffc6;
        }

        // .sfs-btn:hover .sfs-btn-label {
        //   color: #CBFF00;
        // }

        .sfs-btn-icon {
          display: inline-flex;
          align-items: center;
          transform: translateX(-6px);
          opacity: 0;
          transition:
            transform 380ms cubic-bezier(0.22, 1, 0.36, 1) 60ms,
            opacity 280ms ease-out 60ms;
        }

        // .sfs-btn:hover .sfs-btn-icon {
        //   transform: translateX(0);
        //   opacity: 1;
        // }

        .hero-content {
          position: absolute;
          bottom: 52px;
          left: 28px;
          right: 28px;
        }

        @media (min-width: 1024px) {
          .hero-content {
            bottom: auto;
            left: clamp(48px, 8vw, 120px);
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 560px;
          }
          .hero-overlay {
            background: linear-gradient(
              to right,
              rgba(15,20,40,0.90) 0%,
              rgba(15,20,40,0.58) 45%,
              rgba(15,20,40,0.10) 75%,
              rgba(15,20,40,0.00) 100%
            ) !important;
          }
          .sfs-btn {
            width: fit-content !important;
            min-width: 240px !important;
            padding: 0 32px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .word {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .sfs-btn-fill,
          .sfs-btn-icon {
            transition: none !important;
          }
        }
      `}</style>

      <section
        aria-label="Hero"
        style={{
          position: "relative",
          height: "100svh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={bgRef}
          src={imgUrl}
          alt=""
          aria-hidden="true"
          loading="eager"
          style={{
            position: "absolute",
            top: "-15%",
            left: 0,
            width: "100%",
            height: "130%",
            objectFit: "cover",
            objectPosition: "center",
            willChange: "transform",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,20,40,0.15) 0%, rgba(15,20,40,0.82) 52%, rgba(15,20,40,1.00) 100%)",
          }}
        />

        <div className="hero-content">

          <div
            ref={labelRef}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "9.5px",
              color: "rgba(203,255,0,0.80)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {"In collaboration with Padel \u00D7 House Fest"}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(52px, 13vw, 88px)",
              color: "#CBFF00",
              lineHeight: 1.05,
              margin: "0 0 20px",
            }}
          >
            <span
              ref={line1Ref}
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.09em",
                zIndex: 5,
              }}
            >
              {wrapWords("Serve for")}
            </span>
            <span
              ref={line2Ref}
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.05em",
                transformOrigin: "left center",
                zIndex: 3,
              }}
            >
              {wrapWords("Smiles.")}
            </span>
          </h1>

          <div
            ref={badgeRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderLeft: "3px solid #CBFF00",
              borderRadius: "10px",
              padding: "14px 18px",
              marginBottom: "16px",
              width: "100%",
              maxWidth: "420px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "#fff" }}>
              13 JUNE
            </span>
            <span style={dotStyle} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.82)" }}>
              Rotterdam
            </span>
            <span style={dotStyle} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.48)" }}>
              Maashaven 42
            </span>
          </div>

          <div ref={ctaRef}>
            <button
            disabled
              className="sfs-btn"
              onClick={() =>
                window.open("https://weeztix.nl", "_blank", "noopener,noreferrer")
              }
              aria-label="Register now - opens external registration page"
            >
              <span className="sfs-btn-fill" aria-hidden="true" />
              <span className="sfs-btn-label">
                Registration opens soon
                <span className="sfs-btn-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.8 7.5H12.2M12.2 7.5L8.4 3.7M12.2 7.5L8.4 11.3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </button>

          </div>

        </div>
      </section>
    </>
  )
}