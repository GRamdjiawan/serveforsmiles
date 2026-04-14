"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const left  = leftRef.current
    const right = rightRef.current
    const section = sectionRef.current
    if (!left || !right || !section) return

    // Scroll container is <main>, not window
    const scroller = document.querySelector("main") as HTMLElement | null
    if (!scroller) return

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    ScrollTrigger.defaults({ scroller })

    // Left column — slides in from the left, scrubbed to scroll position
    const leftTween = gsap.fromTo(
      left,
      { x: -64, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          scroller,
          start: "top 88%",
          end:   "top 38%",
          scrub: 1.4,
        },
      }
    )

    // Right column — slides in from the right, slightly delayed start
    const rightTween = gsap.fromTo(
      right,
      { x: 64, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          scroller,
          start: "top 82%",
          end:   "top 32%",
          scrub: 1.4,
        },
      }
    )

    return () => {
      leftTween.scrollTrigger?.kill()
      rightTween.scrollTrigger?.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <style>{`
        .about-wrap {
          width: 100%;
          padding: clamp(52px, 10vw, 84px) 28px clamp(64px, 10vw, 96px);
        }

        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .about-wrap {
            padding: clamp(72px, 8vw, 100px) clamp(48px, 8vw, 120px);
          }
          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(48px, 6vw, 80px);
            align-items: start;
          }
        }

        .link-effect-green {
          background: linear-gradient(rgba(26,31,46,1), rgba(26,31,46,1)) no-repeat left center;
          background-size: 0% 100%;
          transition: background-size 480ms cubic-bezier(0.22, 1, 0.36, 1),
                      color 80ms ease;
          padding: 0 2px;
          border-radius: 2px;
          text-decoration: underline;
        }
        .link-effect-green:hover {
          background-size: 100% 100%;
          color: #CBFF00 !important;
          transition: background-size 480ms cubic-bezier(0.22, 1, 0.36, 1),
                      color 100ms ease 150ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-grid > * {
            opacity: 1 !important;
            transform: none !important;
          }
          .link-effect-green {
            transition: none !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="About"
        style={{ background: "#F7F8F3", width: "100%", maxWidth: "100%" }}
      >
        <div className="about-wrap">

          <div style={{ height: "1px", background: "#E5E7EB", marginBottom: "clamp(28px, 4vw, 44px)" }} />

          <div className="about-grid">

            {/* ── LEFT: Headline ── */}
            <div ref={leftRef}>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(36px, 8vw, 56px)",
                color: "#1A1F2E",
                lineHeight: 1.08,
                margin: 0,
              }}>
                More than
                <br />
                a tournament.
              </h2>

              <div style={{
                width: "48px",
                height: "3px",
                background: "#CBFF00",
                borderRadius: "100px",
                margin: "18px 0 16px",
              }} />

              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(15px, 2.2vw, 18px)",
                color: "rgba(26,31,46,0.48)",
                margin: "0 0 36px",
                lineHeight: 1.4,
              }}>
                Let&rsquo;s serve smiles.
              </p>

              <div style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "11px",
                color: "rgba(26,31,46,0.80)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>
                13 JUNE{" "}
                <span style={{ color: "#CBFF00" }}>·</span>{" "}
                ROTTERDAM{" "}
                <span style={{ color: "#CBFF00" }}>·</span>{" "}
                PADEL &amp; NETWORK
              </div>
            </div>

            {/* ── RIGHT: Body ── */}
            <div ref={rightRef}>
              <div style={{ height: "3px", background: "#CBFF00", marginBottom: "28px" }} />

              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.78,
                color: "#6B7280",
                margin: "0 0 20px",
              }}>
                Serve for Smiles started from a simple idea: sport can connect people and create real
                impact. Together with{" "}
                <br/> 
                 <strong style={{ color: "rgba(26,31,46,0.85)", fontWeight: 600 }}>
                  <a href="https://collectivevents.nl/" target="_blank" rel="noopener noreferrer" className="link-effect-green">
                    Padel x Housefest
                  </a>
                </strong>
                 {""}, we&rsquo;re organising a unique padel event
                where sport, music, community and purpose all come together in one place.
              </p>

              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.78,
                color: "#6B7280",
                margin: "0 0 20px",
              }}>
                It&rsquo;s not just about matches on the court. Think a full day of padel, great music,
                meaningful connections, good food and drinks an atmosphere where people come
                together and create something special.
              </p>

              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.78,
                color: "#6B7280",
                margin: "0 0 28px",
              }}>
                Behind every smile, there&rsquo;s a bigger goal. We play for{" "}
                <strong style={{ color: "rgba(26,31,46,0.85)", fontWeight: 600 }}>
                  <a href="https://stichtingjarigejob.nl/" target="_blank" rel="noopener noreferrer" className="link-effect-green">
                    Stichting Jarige Job
                  </a>
                </strong>
                {" "}a foundation that ensures children in the Netherlands who can&rsquo;t afford a
                birthday celebration still get to experience one. Through special birthday boxes filled
                with treats, decorations and gifts, Jarige Job makes sure thousands of kids get a
                birthday they&rsquo;ll never forget. Because every child deserves that.
              </p>

              <div style={{ height: "3px", background: "#CBFF00" }} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
