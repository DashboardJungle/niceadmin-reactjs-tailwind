import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import MediumSizetypo from './Code/MediumSizeTypoCode';
import MediumSizetypoCode from './Code/MediumSizeTypoCode.tsx?raw';

const MediumSizeTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sizes Medium</h4>
            <MediumSizetypo />
          </div>
          <CodeDialog>{MediumSizetypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default MediumSizeTypo;
