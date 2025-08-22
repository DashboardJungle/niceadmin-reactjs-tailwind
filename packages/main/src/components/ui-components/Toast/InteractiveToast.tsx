import CardBox from '../../shared/CardBox';
import Interactivetoast from './Code/InteractiveToastCode';
import InteractivetoastCode from './Code/InteractiveToastCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const InteractiveToast = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Interactive Toast</h4>
            <Interactivetoast />
          </div>
          <CodeDialog>{InteractivetoastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default InteractiveToast;
