import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import HorizontalListtypo from './Code/HorizontalListTypoCode';
import HorizontalListtypoCode from './Code/HorizontalListTypoCode.tsx?raw';

const HorizontalListTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Horizontal list</h4>
            <HorizontalListtypo />
          </div>
          <CodeDialog>{HorizontalListtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default HorizontalListTypo;
