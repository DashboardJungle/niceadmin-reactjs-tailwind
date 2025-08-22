import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import RadioGroupWithDesc from 'src/components/headless-form/RadioGroup/RadioGroupWithDesc';
import BasicRadioGroup from 'src/components/headless-form/RadioGroup/BasicRadioGroup';
import MainRadioGroup from 'src/components/headless-form/RadioGroup/MainRadioGroup';

import WithHtmlForms from 'src/components/headless-form/RadioGroup/WithHtmlForms';
import DisabledRadioGroup from 'src/components/headless-form/RadioGroup/DisabledRadioGroup';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'RadioGRoup',
  },
];

const RadioGroupForm = () => {
  return (
    <>
      <BreadcrumbComp title="Radio Group" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
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
