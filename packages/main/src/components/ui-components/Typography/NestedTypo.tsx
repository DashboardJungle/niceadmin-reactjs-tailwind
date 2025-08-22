import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Nestedtypo from './Code/NestedTypoCode';
import NestedtypoCode from './Code/NestedTypoCode.tsx?raw';

const NestedTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Nested</h4>
            <Nestedtypo />
          </div>
          <CodeDialog>{NestedtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default NestedTypo;
