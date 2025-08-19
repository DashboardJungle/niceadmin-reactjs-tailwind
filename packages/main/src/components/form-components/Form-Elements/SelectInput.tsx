import CardBox from '../../shared/CardBox';
import Selectinput from './Codes/SelectInputCode';
import SelectinputCode from './Codes/SelectInputCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const SelectInput = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-2">Select Input</h4>
          <Selectinput />
        </div>
        <CodeDialog>{SelectinputCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default SelectInput;
