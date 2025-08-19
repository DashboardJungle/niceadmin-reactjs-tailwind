import CardBox from '../../shared/CardBox';
import Inputshadow from './Codes/InputShadowCode';
import InputshadowCode from './Codes/InputShadowCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const InputShadow = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Inputs With Shadow</h4>
          <Inputshadow />
        </div>
        <CodeDialog>{InputshadowCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputShadow;
