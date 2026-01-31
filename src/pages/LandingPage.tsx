import { Hero } from "@/components/landing/Hero";
import { OfferCard } from "@/components/landing/OfferCard";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { StickyCTA } from "@/components/landing/StickyCTA";

interface LandingPageProps {
  variant?: "A" | "B" | "C";
  audience?: "primary" | "highschool" | "college";
  subject?: "maths" | "english";
}

export function LandingPage({ variant = "A", audience = "primary", subject = "maths" }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero variant={variant} audience={audience} subject={subject} />
        <OfferCard variant={variant} />
        <HowItWorks />
        <WhatYouGet />
        <Testimonials />
        <FAQ />
        <FinalCTA variant={variant} />
      </main>
      <Footer />
      <StickyCTA variant={variant} />
    </div>
  );
}

export default LandingPage;
