import Intro from 'src/components/component-page/shared/Intro';
import BasicCarousel from 'src/components/shadcn-ui/Carousel/BasicCarousel';
import CarouselWithultipleItem from 'src/components/shadcn-ui/Carousel/CarouselWithultipleItem';
import { VerticalCarousel } from 'src/components/shadcn-ui/Carousel/VerticalCarousel';

const intro = {
  heading: 'Carousel',
  desc: 'A Carousel is a UI component that cycles through a series of images or content slides.',
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicCarousel />
        </div>
        <div className="col-span-12">
          <VerticalCarousel />
        </div>
        <div className="col-span-12">
          <CarouselWithultipleItem />
        </div>
      </div>
    </>
  );
};

export default page;
