import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Closingmanually from './Codes/ClosingManuallyCode';
import ClosingmanuallyCode from './Codes/ClosingManuallyCode.tsx?raw';

const ClosingManually = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Closing Manually</h4>
            <Closingmanually />
          </div>
          <CodeDialog>{ClosingmanuallyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ClosingManually;
