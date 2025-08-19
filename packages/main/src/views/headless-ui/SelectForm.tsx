import BasicSelect from 'src/components/headless-form/Select/BasicSelect';
import WithLabelSelect from 'src/components/headless-form/Select/WithLabelSelect';
import WithDescriptionSelect from 'src/components/headless-form/Select/WithDescriptionSelect';
import DisabledSelect from 'src/components/headless-form/Select/DisableSelect';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Select',
  desc: 'A Select is a UI component that lets users choose an option from a dropdown menu.',
};

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicSelect />
        </div>
        <div className="col-span-12">
          <WithLabelSelect />
        </div>
        <div className="col-span-12">
          <WithDescriptionSelect />
        </div>
        <div className="col-span-12">
          <DisabledSelect />
        </div>
      </div>
    </>
  );
};

export default page;
