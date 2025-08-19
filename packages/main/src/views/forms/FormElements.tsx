import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import RoundedInputs from 'src/components/form-components/Form-Elements/RoundedInputs';
import DefaultForm from 'src/components/form-components/Form-Elements/DefaultForm';
import InputSizing from 'src/components/form-components/Form-Elements/InputSizing';
import DisableInputs from 'src/components/form-components/Form-Elements/DisableInputs';
import InputShadow from 'src/components/form-components/Form-Elements/InputShadow';
import RangeSliders from 'src/components/form-components/Form-Elements/RangeSlider';
import TextAreaEle from 'src/components/form-components/Form-Elements/TextArea';
import ToggelSwitches from 'src/components/form-components/Form-Elements/ToggelSwitches';
import CheckBoxes from 'src/components/form-components/Form-Elements/CheckBoxes';
import RadioButtons from 'src/components/form-components/Form-Elements/RadioButtons';
import FileUploadEle from 'src/components/form-components/Form-Elements/FileUploadEle';
import FileUploadSizings from 'src/components/form-components/Form-Elements/FileUploadSizings';
import DropZone from 'src/components/form-components/Form-Elements/DropZone';
import SelectInput from 'src/components/form-components/Form-Elements/SelectInput';
import FormHelperText from 'src/components/form-components/Form-Elements/FormHelperText';
import InputColors from 'src/components/form-components/Form-Elements/InputColors';
import DefaultInput from 'src/components/form-components/Form-Elements/DefaultInput';
import FormValidationError from 'src/components/form-components/Form-Elements/FormValidationError';
import FormValidationSuccess from 'src/components/form-components/Form-Elements/FormValidationSuccess';
import InputWithAlterIcon from 'src/components/form-components/Form-Elements/InputWithAlterIcon';
import InputWithBothSideIcon from 'src/components/form-components/Form-Elements/InputWithBothSideIcon';
import InputWithDefIcon from 'src/components/form-components/Form-Elements/InputWithDefIcon';
import InputWithRightIcon from 'src/components/form-components/Form-Elements/InputWithRightIcon';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Form Elements',
  },
];

const FormElements = () => {
  return (
    <>
      <BreadcrumbComp title="Form Elements" links={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="col-span-12">
          <DefaultInput />
        </div>
        <div className="col-span-12">
          <TextAreaEle />
        </div>
        <div className="col-span-12">
          <SelectInput />
        </div>
        <div className="col-span-12">
          <FileUploadEle />
        </div>
        <div className="col-span-12">
          <DropZone />
        </div>
        <div className="col-span-12">
          <InputWithDefIcon />
        </div>
        <div className="col-span-12">
          <InputWithRightIcon />
        </div>
        <div className="col-span-12">
          <InputWithBothSideIcon />
        </div>
        <div className="col-span-12">
          <InputWithAlterIcon />
        </div>
        <div className="col-span-12">
          <DisableInputs />
        </div>
        <div className="col-span-12">
          <FormValidationSuccess />
        </div>
        <div className="col-span-12">
          <FormValidationError />
        </div>
        <div className="col-span-12">
          <InputColors />
        </div>
        <div className="col-span-12">
          <InputSizing />
        </div>
        <div className="col-span-12">
          <FileUploadSizings />
        </div>
        <div className="col-span-12">
          <DefaultForm />
        </div>
        <div className="col-span-12">
          <RoundedInputs />
        </div>
        <div className="col-span-12">
          <InputShadow />
        </div>
        <div className="col-span-12">
          <FormHelperText />
        </div>
        <div className="col-span-12">
          <RangeSliders />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <ToggelSwitches />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <CheckBoxes />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RadioButtons />
        </div>
      </div>
    </>
  );
};

export default FormElements;
