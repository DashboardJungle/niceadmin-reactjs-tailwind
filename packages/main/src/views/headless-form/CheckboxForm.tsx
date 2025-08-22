import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import WithLable from 'src/components/headless-form/Checkbox/WithLable';
import WithDescription from 'src/components/headless-form/Checkbox/WithDescription';
import DisableCheckBox from 'src/components/headless-form/Checkbox/DisableCheckBox';
import UsingHtmlForm from 'src/components/headless-form/Checkbox/UsingHtmlForm';
import UsingUncontrolled from 'src/components/headless-form/Checkbox/UsingUnctrolled';
import TransitionCheckbox from 'src/components/headless-form/Checkbox/TransitionCheckbox';
import RenderAsDiv from 'src/components/headless-form/Checkbox/RenderAsDiv';
import RenderAsProps from 'src/components/headless-form/Checkbox/RenderAsProps';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Checkbox',
  },
];

const CheckboxForm = () => {
  return (
    <div>
      <BreadcrumbComp title="Checkbox" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <WithLable />
        </div>
        <div className="col-span-12">
          <WithDescription />
        </div>
        <div className="col-span-12">
          <DisableCheckBox />
        </div>
        <div className="col-span-12">
          <UsingHtmlForm />
        </div>
        <div className="col-span-12">
          <UsingUncontrolled />
        </div>
        <div className="col-span-12">
          <TransitionCheckbox />
        </div>
        <div className="col-span-12">
          <RenderAsDiv />
        </div>
        <div className="col-span-12">
          <RenderAsProps />
        </div>
      </div>
    </div>
  );
};

export default CheckboxForm;
