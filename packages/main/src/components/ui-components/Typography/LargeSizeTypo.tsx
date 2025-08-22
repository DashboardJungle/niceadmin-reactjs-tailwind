import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import LargeSizetypo from './Code/LargeSizeTypoCode';
import LargeSizetypoCode from './Code/LargeSizeTypoCode.tsx?raw';

const LargeSizeTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sizes Large</h4>
            <LargeSizetypo />
          </div>
          <CodeDialog>{LargeSizetypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LargeSizeTypo;
