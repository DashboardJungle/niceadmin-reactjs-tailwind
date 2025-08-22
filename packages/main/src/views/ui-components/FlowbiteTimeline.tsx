import DefaultTimeline from 'src/components/ui-components/Timeline/DefaultTimeline';
import HorizontalTimeline from 'src/components/ui-components/Timeline/HorizontalTimeline';
import VerticalTimeline from 'src/components/ui-components/Timeline/VerticalTimeline';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Timeline',
  desc: 'A Timeline is a UI component used to display a sequence of events in chronological order.',
};

const allApis = [
  {
    id: '1',
    prop: 'horizontal',
    description: 'Arranges the timeline items in a horizontal layout.',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteTimeline = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className=" col-span-12">
          <DefaultTimeline />
        </div>
        {/* Vertical Timeline */}
        <div className=" col-span-12">
          <VerticalTimeline />
        </div>
        {/* Horizontal Timeline */}
        <div className=" col-span-12">
          <HorizontalTimeline />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Timeline" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTimeline;
