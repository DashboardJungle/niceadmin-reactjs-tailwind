import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import NumbersKey from './Code/NumbersKeysCode';
import NumbersKeyCode from './Code/NumbersKeysCode.tsx?raw';

const NumbersKeys = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Number Keys</h4>
            <NumbersKey />
          </div>
          <CodeDialog>{NumbersKeyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default NumbersKeys;
