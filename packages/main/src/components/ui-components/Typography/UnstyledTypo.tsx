import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Unstyledtypo from './Code/UnstyledTypoCode';
import UnstyledtypoCode from './Code/UnstyledTypoCode.tsx?raw';

const UnstyledTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Unstyled</h4>
            <Unstyledtypo />
          </div>
          <CodeDialog>{UnstyledtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default UnstyledTypo;
