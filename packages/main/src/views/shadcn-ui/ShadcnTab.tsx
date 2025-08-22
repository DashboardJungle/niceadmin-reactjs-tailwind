import Intro from 'src/components/component-page/shared/Intro';
import BasicTab from 'src/components/shadcn-ui/Tab/BasicTab';

const intro = {
  heading: 'Tab',
  desc: 'A Tab is a UI component that organizes content into separate views, allowing users to switch between them.',
};

const ShadcnTab = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicTab />
        </div>
      </div>
    </>
  );
};

export default ShadcnTab;
