import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import SmallSizetypo from './Code/SmallSizeTypoCode';
import SmallSizetypoCode from './Code/SmallSizeTypoCode.tsx?raw';

const SmallSizeTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sizes Small</h4>
            <SmallSizetypo />
          </div>
          <CodeDialog>{SmallSizetypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SmallSizeTypo;
