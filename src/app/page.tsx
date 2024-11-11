import { HeroBannerSection } from '@/app/components/HeroBannerSection'
import { SplitMediaSection } from '@/app/components/SplitMediaSection'
import { AboutUs } from '@/app/components/AboutUs'

export default function Home() {

  return (
    <>
      <HeroBannerSection />
      <SplitMediaSection></SplitMediaSection>
      <AboutUs />
    </>
  );
}
