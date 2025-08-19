import CardBox from '../../shared/CardBox';
import InputWithicon from './Codes/InputWithIconCode';
import InputWithiconCode from './Codes/InputWithIconCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const InputWithIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input groups with icon</h4>
          <InputWithicon />
        </div>
        <CodeDialog>{InputWithiconCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputWithIcon;
