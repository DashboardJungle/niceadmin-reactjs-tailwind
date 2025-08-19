import Intro from 'src/components/component-page/shared/Intro';
import BottomBanner from 'src/components/ui-components/Banner/BottomBanner';
import CTABanner from 'src/components/ui-components/Banner/CTABanner';
import InformationalBanner from 'src/components/ui-components/Banner/InformationalBanner';
import NewsletterBanner from 'src/components/ui-components/Banner/NewsletterBanner';
import StickyBanner from 'src/components/ui-components/Banner/StickyBanner';

const intro = {
  heading: 'Banner',
  desc: 'A Banner is a UI component used to display prominent messages or alerts at the top or bottom of a page, drawing user attention to important information or actions.',
};

const FlowbiteBanner = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Sticky Banner */}
        <div className="col-span-12">
          <StickyBanner />
        </div>
        {/* Bottom Banner */}
        <div className="col-span-12">
          <BottomBanner />
        </div>
        {/* CTA Banner */}
        <div className="col-span-12">
          <CTABanner />
        </div>
        {/* Newsletter Banner */}
        <div className="col-span-12">
          <NewsletterBanner />
        </div>
        {/* Informational Banner */}
        <div className="col-span-12">
          <InformationalBanner />
        </div>
      </div>
    </>
  );
};

export default FlowbiteBanner;
