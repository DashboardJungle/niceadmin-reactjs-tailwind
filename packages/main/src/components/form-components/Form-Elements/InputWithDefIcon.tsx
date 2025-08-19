import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import InputWithDeficon from './Codes/InputWithDefIconCode';
import InputWithDeficonCode from './Codes/InputWithDefIconCode.tsx?raw';

const InputWithDefIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input with default icon</h4>
          <InputWithDeficon />
        </div>
        <CodeDialog>{InputWithDeficonCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputWithDefIcon;
