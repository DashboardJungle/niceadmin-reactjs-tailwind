import CardBox from '../../shared/CardBox';
import RoundInputs from './Codes/RoundedInputs';
import RoundInputsCode from './Codes/RoundedInputs.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const RoundedInputs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Rounded Inputs form</h4>
          <RoundInputs />
        </div>
        <CodeDialog>{RoundInputsCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default RoundedInputs;
