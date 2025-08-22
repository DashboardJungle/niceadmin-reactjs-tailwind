import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import LetterKey from './Code/LetterKeysCode';
import LetterKeyCode from './Code/LetterKeysCode.tsx?raw';

const LetterKeys = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Letter Keys</h4>
            <LetterKey />
          </div>
          <CodeDialog>{LetterKeyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LetterKeys;
