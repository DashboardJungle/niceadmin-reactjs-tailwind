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
import InputColors from 'src/components/shadcn-form/Input/InputColors';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Input',
  desc: 'An Input is a UI component that allows users to enter and edit text or data.',
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
