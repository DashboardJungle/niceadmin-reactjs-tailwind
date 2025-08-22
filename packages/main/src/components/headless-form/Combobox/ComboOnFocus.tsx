import CodeDialog from 'src/components/shared/CodeDialog';
import CardBox from '../../shared/CardBox';
import ComboOnfocus from './Codes/ComboOnFocusCode';
import ComboOnfocusCode from './Codes/ComboOnFocusCode.tsx?raw';

const ComboOnFocus = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Open On Focus</h4>
            <ComboOnfocus />
          </div>
          <CodeDialog>{ComboOnfocusCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ComboOnFocus;
