import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import InputWithLabel from 'src/components/headless-form/Input/InputWithLabel';
import SquareInputWithLabel from 'src/components/headless-form/Input/SquareInputWithLabel';
import InputWithDescription from 'src/components/headless-form/Input/InputWithDescription';
import DisabledInput from 'src/components/headless-form/Input/DisableInput';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'input',
  },
];

const InputForm = () => {
  return (
    <>
      <BreadcrumbComp title="input" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <InputWithLabel />
        </div>
        <div className="col-span-12">
          <SquareInputWithLabel />
        </div>
        <div className="col-span-12">
          <InputWithDescription />
        </div>
        <div className="col-span-12">
          <DisabledInput />
        </div>
      </div>
    </>
  );
};

export default InputForm;
