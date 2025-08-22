import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Dismissaltoast from './Code/DismissalToastCode';
import DismissaltoastCode from './Code/DismissalToastCode.tsx?raw';

const DismissalToast = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Dismissal Toast</h4>
            <Dismissaltoast />
          </div>
          <CodeDialog>{DismissaltoastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DismissalToast;
