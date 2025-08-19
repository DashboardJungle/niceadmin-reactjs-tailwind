import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import InputWithRighticon from './Codes/InputWithRightIconCode';
import InputWithRighticonCode from './Codes/InputWithRightIconCode.tsx?raw';

const InputWithRightIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input with right icon</h4>
          <InputWithRighticon />
        </div>
        <CodeDialog>{InputWithRighticonCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputWithRightIcon;
