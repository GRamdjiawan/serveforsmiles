"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const labelRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = [
      { el: labelRef.current, delay: 0 },
      { el: headlineRef.current, delay: 120 },
      { el: badgeRef.current, delay: 280 },
      { el: ctaRef.current, delay: 400 },
    ]

    items.forEach(({ el, delay }) => {
      if (!el) return
      el.style.opacity = "0"
      el.style.transform = "translateY(14px)"
      setTimeout(() => {
        el.style.transition = "opacity 500ms ease-out, transform 500ms ease-out"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, delay)
    })

    // CTA glow pulse once after 600ms
    const btn = ctaRef.current?.querySelector<HTMLAnchorElement>(".cta-button")
    if (btn) {
      setTimeout(() => {
        btn.style.animation = "glowPulse 700ms ease-in-out forwards"
      }, 600)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0%   { box-shadow: 0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22); }
          50%  { box-shadow: 0 0 48px rgba(203,255,0,0.70), 0 6px 24px rgba(203,255,0,0.40); }
          100% { box-shadow: 0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22); }
        }
      `}</style>

      <section
        aria-label="Hero"
        style={{
          position: "relative",
          height: "100svh",
          width: "100%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1646649853703-7645147474ba?w=1400&q=85&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* SEO image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1646649853703-7645147474ba?w=1400&q=85&fit=crop&crop=center"
          alt="Padel court - Serve for Smiles event"
          style={{ display: "none" }}
        />

        {/* Mobile overlay */}
        <div
          className="hero-overlay-mobile"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,20,40,0.15) 0%, rgba(15,20,40,0.82) 52%, rgba(15,20,40,1.00) 100%)",
          }}
        />

        {/* Desktop overlay */}
        <style>{`
          @media (min-width: 1024px) {
            .hero-overlay-mobile {
              background: linear-gradient(
                to right,
                rgba(15,20,40,0.90) 0%,
                rgba(15,20,40,0.58) 45%,
                rgba(15,20,40,0.10) 75%,
                rgba(15,20,40,0.00) 100%
              ) !important;
            }
          }
        `}</style>

        {/* Content — mobile: bottom, desktop: centered left */}
        <div className="hero-content" style={{
          position: "absolute",
          bottom: "52px",
          left: "28px",
          right: "28px",
        }}>
          <style>{`
            @media (min-width: 1024px) {
              .hero-content {
                bottom: auto !important;
                left: clamp(48px, 8vw, 120px) !important;
                right: auto !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                max-width: 560px !important;
              }
            }
          `}</style>

          {/* 1. Micro-label */}
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
            IN COLLABORATION WITH PADEL × HOUSE FEST
          </div>

          {/* 2. Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(52px, 13vw, 88px)",
              color: "#CBFF00",
              lineHeight: 1.0,
              margin: "0 0 20px",
            }}
          >
            Serve for
            <br />
            Smiles.
          </h1>

          {/* 3. Date + Location badge */}
          <div
            ref={badgeRef}
            className="date-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
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
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>
              13 JUNE
            </span>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CBFF00", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.80)" }}>
              Rotterdam
            </span>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CBFF00", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.48)" }}>
              Maashaven 42
            </span>
          </div>

          {/* 4. CTA */}
          <div ref={ctaRef}>
            <a
              href="#register"
              className="cta-button"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "260px",
                height: "54px",
                background: "#CBFF00",
                border: "none",
                borderRadius: "100px",
                color: "#1A1F2E",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22)",
                transition: "transform 150ms ease-out, box-shadow 150ms ease-out",
                textDecoration: "none",
                lineHeight: "54px",
                textAlign: "center",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "scale(1.025)"
                el.style.boxShadow = "0 0 36px rgba(203,255,0,0.60), 0 6px 20px rgba(203,255,0,0.30)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "scale(1)"
                el.style.boxShadow = "0 0 28px rgba(203,255,0,0.45), 0 4px 14px rgba(203,255,0,0.22)"
              }}
            >
              Register now ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
