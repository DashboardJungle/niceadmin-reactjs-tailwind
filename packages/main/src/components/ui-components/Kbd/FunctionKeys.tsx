import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import FunctionKey from './Code/FunctionKeysCode';
import FunctionKeyCode from './Code/FunctionKeysCode.tsx?raw';

const FunctionKeys = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Function keys</h4>
            <FunctionKey />
          </div>
          <CodeDialog>{FunctionKeyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FunctionKeys;
