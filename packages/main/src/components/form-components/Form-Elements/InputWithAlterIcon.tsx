import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import InputWithAltericon from './Codes/InputWithAlterIconCode';
import InputWithAltericonCode from './Codes/InputWithAlterIconCode.tsx?raw';

const InputWithAlterIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input with alternative icon</h4>
          <InputWithAltericon />
        </div>
        <CodeDialog>{InputWithAltericonCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputWithAlterIcon;
