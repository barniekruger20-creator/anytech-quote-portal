
import { HeroSection } from '@/components/hero-section';
import { ApplicationsOverview } from '@/components/applications-overview';
import { FeatureHighlights } from '@/components/feature-highlights';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ApplicationsOverview />
      <FeatureHighlights />
      <Footer />
    </div>
  );
}
