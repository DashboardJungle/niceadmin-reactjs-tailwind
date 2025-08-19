import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import InputWithBothSideicon from './Codes/InputWithBothSideIconCode';
import InputWithBothSideiconCode from './Codes/InputWithBothSideIconCode.tsx?raw';

const InputWithBothSideIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Input with both-side icon</h4>
          <InputWithBothSideicon />
        </div>
        <CodeDialog>{InputWithBothSideiconCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputWithBothSideIcon;
