import SimpleInput from 'src/components/shadcn-form/Input/SimpleInput';
import InputWithLabel from 'src/components/shadcn-form/Input/InputWithLabel';
import Forminput from 'src/components/shadcn-form/Input/Forminput';
import OtpInput from 'src/components/shadcn-form/Input/OtpInput';
import DisabledInput from 'src/components/shadcn-form/Input/DisabledInput';
import OtpInputSeprator from 'src/components/shadcn-form/Input/OtpInputSeprator';
import ControlledOtpInput from 'src/components/shadcn-form/Input/ControlledOtpInput';
import DefaultTextarea from 'src/components/shadcn-form/Input/DefaultTextarea';
import TextareaWithText from 'src/components/shadcn-form/Input/TextareaWithText';
import FormwithTextarea from 'src/components/shadcn-form/Input/FormwithTextarea';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import InputColors from 'src/components/shadcn-form/Input/InputColors';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Input',
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Input" links={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <SimpleInput />
        </div>
        <div className="col-span-12">
          <InputWithLabel />
        </div>
        <div className="col-span-12">
          <Forminput />
        </div>
        <div className="col-span-12">
          <DisabledInput />
        </div>
        <div className="col-span-12">
          <InputColors />
        </div>
        <div className="col-span-12">
          <DefaultTextarea />
        </div>
        <div className="col-span-12">
          <TextareaWithText />
        </div>
        <div className="col-span-12">
          <FormwithTextarea />
        </div>
        <div className="col-span-12">
          <OtpInput />
        </div>
        <div className="col-span-12">
          <OtpInputSeprator />
        </div>
        <div className="col-span-12">
          <ControlledOtpInput />
        </div>
      </div>
    </>
  );
};

export default page;
