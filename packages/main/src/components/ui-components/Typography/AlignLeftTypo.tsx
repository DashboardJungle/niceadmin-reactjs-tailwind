import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import AlignLefttypo from './Code/AlignLeftTypoCode';
import AlignLefttypoCode from './Code/AlignLeftTypoCode.tsx?raw';

const AlignLeftTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Alignment Left</h4>
            <AlignLefttypo />
          </div>
          <CodeDialog>{AlignLefttypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AlignLeftTypo;
