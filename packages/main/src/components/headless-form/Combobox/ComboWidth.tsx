import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Combowidth from './Codes/ComboWidthCode';
import CombowidthCode from './Codes/ComboWidthCode.tsx?raw';

const ComboWidth = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dropdown Width</h4>
            <Combowidth />
          </div>
          <CodeDialog>{CombowidthCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ComboWidth;
