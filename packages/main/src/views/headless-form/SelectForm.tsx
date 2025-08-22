import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import BasicSelect from 'src/components/headless-form/Select/BasicSelect';
import WithLabelSelect from 'src/components/headless-form/Select/WithLabelSelect';
import WithDescriptionSelect from 'src/components/headless-form/Select/WithDescriptionSelect';
import DisabledSelect from 'src/components/headless-form/Select/DisableSelect';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Select',
  },
];

const SelectForm = () => {
  return (
    <>
      <BreadcrumbComp title="Select" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
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

export default SelectForm;
