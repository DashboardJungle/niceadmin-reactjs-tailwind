import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import MainFieldset from 'src/components/headless-form/Fieldset/MainFieldset';
import DisableFieldset from 'src/components/headless-form/Fieldset/DisableFieldset';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Fieldset',
  },
];

const FieldsetForm = () => {
  return (
    <>
      <BreadcrumbComp title="Fieldset" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
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
