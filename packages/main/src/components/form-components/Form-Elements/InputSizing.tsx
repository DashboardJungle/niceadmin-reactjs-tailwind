import CardBox from '../../shared/CardBox';
import Inputsizing from './Codes/InputSizingCode';
import InputsizingCode from './Codes/InputSizingCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const InputSizing = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input sizing</h4>
          <Inputsizing />
        </div>
        <CodeDialog>{InputsizingCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputSizing;
