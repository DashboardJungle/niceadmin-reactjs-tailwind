import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Formcheckbox from './code/FormCheckboxCode';
import FormcheckboxCode from './code/FormCheckboxCode.tsx?raw';

const FormCheckbox = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">With Form</h4>
          <Formcheckbox />
        </div>
        <CodeDialog>{FormcheckboxCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default FormCheckbox;
