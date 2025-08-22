import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import BlockOuttypo from './Code/BlockOutTypoCode';
import BlockOuttypoCode from './Code/BlockOutTypoCode.tsx?raw';

const BlockOutTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default blockquote</h4>
            <BlockOuttypo />
          </div>
          <CodeDialog>{BlockOuttypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BlockOutTypo;
