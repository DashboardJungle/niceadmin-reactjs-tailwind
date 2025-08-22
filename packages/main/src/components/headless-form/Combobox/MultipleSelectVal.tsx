import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import MultipleSelectval from './Codes/MultipleSelectValCode';
import MultipleSelectvalCode from './Codes/MultipleSelectValCode.tsx?raw';

const MultipleSelectVal = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Selecting Multiple Values</h4>
            <MultipleSelectval />
          </div>
          <CodeDialog>{MultipleSelectvalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default MultipleSelectVal;
