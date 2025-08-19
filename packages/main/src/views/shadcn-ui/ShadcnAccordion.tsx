import Intro from 'src/components/component-page/shared/Intro';
import BasicAccordion from 'src/components/shadcn-ui/Accordion/BasicAccordion';

const intro = {
  heading: 'Accordion',
  desc: 'An Accordion is a UI component that expands and collapses sections to show or hide related content.',
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
          <BasicAccordion />
        </div>
      </div>
    </>
  );
};

export default page;
