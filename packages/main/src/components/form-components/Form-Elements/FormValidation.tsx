import CardBox from '../../shared/CardBox';
import Formvalidation from './Codes/FormValidationCode';
import FormvalidationCode from './Codes/FormValidationCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const FormValidation = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Form validation</h4>
          <Formvalidation />
        </div>
        <CodeDialog>{FormvalidationCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default FormValidation;
