import RadioGroupWithDesc from 'src/components/headless-form/RadioGroup/RadioGroupWithDesc';
import BasicRadioGroup from 'src/components/headless-form/RadioGroup/BasicRadioGroup';
import MainRadioGroup from 'src/components/headless-form/RadioGroup/MainRadioGroup';

import WithHtmlForms from 'src/components/headless-form/RadioGroup/WithHtmlForms';
import DisabledRadioGroup from 'src/components/headless-form/RadioGroup/DisabledRadioGroup';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Radio Group',
  desc: 'A Radio Group is a UI component that presents a set of options where only one can be selected at a time.',
};

const RadioGroupForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <MainRadioGroup />
        </div>
        <div className="col-span-12">
          <RadioGroupWithDesc />
        </div>
        <div className="col-span-12">
          <DisabledRadioGroup />
        </div>
        <div className="col-span-12">
          <BasicRadioGroup />
        </div>
        <div className="col-span-12">
          <WithHtmlForms />
        </div>
      </div>
    </>
  );
};

export default RadioGroupForm;
