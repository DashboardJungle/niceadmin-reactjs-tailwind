import CardBox from '../../shared/CardBox';
import DisableInput from './Codes/DisableInputsCode';
import DisableInputCode from './Codes/DisableInputsCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const DisableInputs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Disabled inputs</h4>
          <DisableInput />
        </div>
        <CodeDialog>{DisableInputCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default DisableInputs;
