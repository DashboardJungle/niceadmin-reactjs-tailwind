import Intro from 'src/components/component-page/shared/Intro';
import DefaultInput from 'src/components/form-components/Form-Elements/DefaultInput';
import DisableInputs from 'src/components/form-components/Form-Elements/DisableInputs';
import DropZone from 'src/components/form-components/Form-Elements/DropZone';
import FileUploadEle from 'src/components/form-components/Form-Elements/FileUploadEle';
import FileUploadSizings from 'src/components/form-components/Form-Elements/FileUploadSizings';
import FormValidationError from 'src/components/form-components/Form-Elements/FormValidationError';
import FormValidationSuccess from 'src/components/form-components/Form-Elements/FormValidationSuccess';
import InputColors from 'src/components/form-components/Form-Elements/InputColors';
import InputShadow from 'src/components/form-components/Form-Elements/InputShadow';
import InputSizing from 'src/components/form-components/Form-Elements/InputSizing';
import InputWithAlterIcon from 'src/components/form-components/Form-Elements/InputWithAlterIcon';
import InputWithBothSideIcon from 'src/components/form-components/Form-Elements/InputWithBothSideIcon';
import InputWithDefIcon from 'src/components/form-components/Form-Elements/InputWithDefIcon';
import InputWithRightIcon from 'src/components/form-components/Form-Elements/InputWithRightIcon';
import RoundedInputs from 'src/components/form-components/Form-Elements/RoundedInputs';
import SelectInput from 'src/components/form-components/Form-Elements/SelectInput';
import TextAreaEle from 'src/components/form-components/Form-Elements/TextArea';
import DefaultForm from 'src/components/form-components/Form-Layouts/DefaultForm';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const intro = {
  heading: 'Input',
  desc: 'An Input is a UI component used to collect text or data from the user.',
};

const allApis = [
  {
    id: '1',
    prop: 'id',
    description: 'Unique identifier applied to the native <input> element.',
    type: 'string',
    default: '-',
  },
  {
    id: '2',
    prop: 'type',
    description: 'Specifies the HTML input type (e.g. "text", "email", "password").',
    type: 'string',
    default: 'text',
  },
  {
    id: '3',
    prop: 'placeholder',
    description: 'Placeholder text displayed inside the input when empty.',
    type: 'string',
    default: '-',
  },
  {
    id: '4',
    prop: 'value',
    description: 'Controlled input value.',
    type: 'string',
    default: '-',
  },
  {
    id: '5',
    prop: 'onChange',
    description: 'Callback invoked when input value changes (event handler).',
    type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
    default: '-',
  },
  {
    id: '6',
    prop: 'disabled',
    description: 'Disables the input if true.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '7',
    prop: 'readOnly',
    description: 'Makes the input read-only if true.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '8',
    prop: 'sizing',
    description: 'Size variant of the input field (“sm”, “md”, “lg”).',
    type: '"sm" | "md" | "lg"',
    default: '"md"',
  },
  {
    id: '9',
    prop: 'color',
    description: 'Visual style variant ("gray", "info", "success", "failure", "warning").',
    type: 'keyof FlowbiteTextInputColors',
    default: 'gray',
  },
  {
    id: '10',
    prop: 'shadow',
    description: 'Adds input shadow when true.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '11',
    prop: 'icon',
    description: 'SVG icon component rendered inside the input (left).',
    type: 'React.FC<SVGProps<SVGSVGElement>>',
    default: '-',
  },
  {
    id: '12',
    prop: 'rightIcon',
    description: 'SVG icon component rendered inside the input (right).',
    type: 'React.FC<SVGProps<SVGSVGElement>>',
    default: '-',
  },
  {
    id: '13',
    prop: 'addon',
    description: 'Additional element (e.g., symbol) rendered adjacent to input.',
    type: 'ReactNode',
    default: '-',
  },
  {
    id: '14',
    prop: 'helperText',
    description: 'Supplementary text rendered below the input (e.g. description or validation).',
    type: 'ReactNode',
    default: '-',
  },
];

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultInput />
        </div>
        {/* text area */}
        <div className="col-span-12">
          <TextAreaEle />
        </div>
        {/* default select */}
        <div className="col-span-12">
          <SelectInput />
        </div>
        {/* default file upload */}
        <div className="col-span-12">
          <FileUploadEle />
        </div>
        {/* file upload dropzone */}
        <div className="col-span-12">
          <DropZone />
        </div>
        {/* Input With Default Icon */}
        <div className="col-span-12">
          <InputWithDefIcon />
        </div>
        {/* Input With Right Icon */}
        <div className="col-span-12">
          <InputWithRightIcon />
        </div>
        {/* Input With Both Side Icon */}
        <div className="col-span-12">
          <InputWithBothSideIcon />
        </div>
        {/* Input With alternative Icon */}
        <div className="col-span-12">
          <InputWithAlterIcon />
        </div>
        {/* disabled */}
        <div className="col-span-12">
          <DisableInputs />
        </div>
        {/* form validation success */}
        <div className="col-span-12">
          <FormValidationSuccess />
        </div>
        {/* form validation error */}
        <div className="col-span-12">
          <FormValidationError />
        </div>
        {/* input colors */}
        <div className="col-span-12">
          <InputColors />
        </div>
        {/* input size */}
        <div className="col-span-12">
          <InputSizing />
        </div>
        {/* file upload sizes */}
        <div className="col-span-12">
          <FileUploadSizings />
        </div>
        {/* default form */}
        <div className="col-span-12">
          <DefaultForm />
        </div>
        {/* rounded input form */}
        <div className="col-span-12">
          <RoundedInputs />
        </div>
        {/* input with shadow */}
        <div className="col-span-12">
          <InputShadow />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Input" />
        </div>
      </div>
    </>
  );
};

export default page;
