import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import BlockQtIcontypo from './Code/BlockQtIconTypoCode';
import BlockQtIcontypoCode from './Code/BlockQtIconTypoCode.tsx?raw';

const BlockQtIconTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Blockquote icon</h4>
            <BlockQtIcontypo />
          </div>
          <CodeDialog>{BlockQtIcontypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BlockQtIconTypo;
