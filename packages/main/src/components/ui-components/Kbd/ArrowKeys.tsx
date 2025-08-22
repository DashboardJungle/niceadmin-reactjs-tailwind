import CardBox from '../../shared/CardBox';
import ArrowKey from './Code/ArrowKeysCode';
import ArrowKeyCode from './Code/ArrowKeysCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const ArrowKeys = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Arrow Keys</h4>
            <ArrowKey />
          </div>
          <CodeDialog>{ArrowKeyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ArrowKeys;
