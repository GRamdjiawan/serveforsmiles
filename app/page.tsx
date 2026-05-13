import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FooterSection from "@/components/footer-section"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://serveforsmiles.nl'

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Serve for Smiles",
  description:
    "A charity padel event where sport, music, community and purpose come together. We play for Stichting Jarige Job — a foundation that ensures children in the Netherlands who can't afford a birthday celebration still get to experience one.",
  startDate: "2025-06-13T10:00:00+02:00",
  endDate: "2025-06-13T22:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Winkelhaak",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Winkelhaak 11",
      addressLocality: "Zwijndrecht",
      addressCountry: "NL",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Serve for Smiles",
    url: siteUrl,
  },
  image: [`${siteUrl}/og-image.jpg`],
  url: siteUrl,
  offers: {
    "@type": "Offer",
    url: "https://weeztix.nl",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
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
    </>
  )
}
