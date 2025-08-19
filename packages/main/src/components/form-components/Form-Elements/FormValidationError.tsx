import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import FormValidationerror from './Codes/FormValidationErrorCode';
import FormValidationerrorCode from './Codes/FormValidationErrorCode.tsx?raw';

const FormValidationError = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Form validation error</h4>
          <FormValidationerror />
        </div>
        <CodeDialog>{FormValidationerrorCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default FormValidationError;
