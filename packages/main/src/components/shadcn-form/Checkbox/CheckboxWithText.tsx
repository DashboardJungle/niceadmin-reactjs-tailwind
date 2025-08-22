import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import CheckboxWithtext from './code/CheckboxWithTextCode';
import CheckboxWithtextCode from './code/CheckboxWithTextCode.tsx?raw';

const CheckboxWithText = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">With Text</h4>
          <CheckboxWithtext />
        </div>
        <CodeDialog>{CheckboxWithtextCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default CheckboxWithText;
