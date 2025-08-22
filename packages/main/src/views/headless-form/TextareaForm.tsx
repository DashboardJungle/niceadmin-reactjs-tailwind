import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import BasicTextarea from 'src/components/headless-form/Textarea/BasicTextarea';
import WithLabelTextarea from 'src/components/headless-form/Textarea/WithLabel';
import WithDescriptionTextarea from 'src/components/headless-form/Textarea/WithDescriptionTextarea';
import DisableTextarea from 'src/components/headless-form/Textarea/DisableTextArea';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Textarea',
  },
];

const TextareaForm = () => {
  return (
    <>
      <BreadcrumbComp title="Textarea" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicTextarea />
        </div>
        <div className="col-span-12">
          <WithLabelTextarea />
        </div>
        <div className="col-span-12">
          <WithDescriptionTextarea />
        </div>
        <div className="col-span-12">
          <DisableTextarea />
        </div>
      </div>
    </>
  );
};

export default TextareaForm;
