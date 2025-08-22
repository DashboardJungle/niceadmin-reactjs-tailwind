import CardBox from '../../shared/CardBox';
import AlignCentertypo from './Code/AlignCenterTypoCode';
import AlignCentertypoCode from './Code/AlignCenterTypoCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const AlignRightTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Alignment Center</h4>
            <AlignCentertypo />
          </div>
          <CodeDialog>{AlignCentertypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AlignRightTypo;
