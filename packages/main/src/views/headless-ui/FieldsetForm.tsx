import MainFieldset from 'src/components/headless-form/Fieldset/MainFieldset';
import DisableFieldset from 'src/components/headless-form/Fieldset/DisableFieldset';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Fieldset',
  desc: 'A Fieldset is a UI component used to group related form elements under a common label.',
};

const FieldsetForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <MainFieldset />
        </div>
        <div className="col-span-12">
          <DisableFieldset />
        </div>
      </div>
    </>
  );
};

export default FieldsetForm;
