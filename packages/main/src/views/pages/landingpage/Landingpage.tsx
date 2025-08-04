
import Divider from 'src/components/landing-page/divider'
import ApplicationSec from 'src/components/landing-page/home/application-sec'
import DemoVariations from 'src/components/landing-page/home/demo-variation'
import FeatureHightlights from 'src/components/landing-page/home/feature-highlights'
import Features from 'src/components/landing-page/home/features'
import HeroSection from 'src/components/landing-page/home/hero-section'
import PromotionBanner from 'src/components/landing-page/home/promotion-banner'
import Testimonial from 'src/components/landing-page/home/testimonial'
import VersionSection from 'src/components/landing-page/home/version-section'
import Footer from 'src/components/landing-page/layout/footer'
import Header from 'src/components/landing-page/layout/header'


const page = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <VersionSection />
      <Divider />
      <DemoVariations />
      <Divider />
      <ApplicationSec />
      <Divider />
      <Features />
      <Divider />
      <FeatureHightlights />
      <Divider />
      <Testimonial />
      <Divider />
      <PromotionBanner />
      <Footer />
    </main>
  )
}

export default page
