import BasicAccordion from 'src/components/ui-components/Accordian/BasicAccordion';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import FlushAccordian from 'src/components/ui-components/Accordian/FlushAccordion';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Accordion',
  desc: 'An accordion is a UI component for toggling sections of content in acompact layout.',
};

const allApis = [
  {
    id: '1',
    prop: 'collapseAll',
    description: 'Automatically collapses all accordion panels.',
    type: 'boolean',
    default: `false`,
  },
];

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
        {/* Flush */}
        <div className="col-span-12">
          <FlushAccordian />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Accordion" />
        </div>
      </div>
    </>
  );
};

export default page;
