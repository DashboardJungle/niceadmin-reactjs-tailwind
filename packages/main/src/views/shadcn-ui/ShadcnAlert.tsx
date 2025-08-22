import Intro from 'src/components/component-page/shared/Intro';
import BasicAlert from 'src/components/shadcn-ui/Alert/BasicAlert';
import LightAlert from 'src/components/shadcn-ui/Alert/LightAlert';

const intro = {
  heading: 'Alert',
  desc: 'An Alert is a UI component used to display important messages or warnings to users.',
};

const ShadcnAlert = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicAlert />
        </div>
        <div className="col-span-12">
          <LightAlert />
        </div>
      </div>
    </>
  );
};

export default ShadcnAlert;
