import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FooterSection from "@/components/footer-section"

export default function Page() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100vw",
        height: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        overscrollBehaviorY: "none",
        WebkitOverflowScrolling: "touch",
        background: "var(--sfs-cream)",
      }}
    >
      <HeroSection />
      <AboutSection />
      <FooterSection />
    </main>
  )
}
