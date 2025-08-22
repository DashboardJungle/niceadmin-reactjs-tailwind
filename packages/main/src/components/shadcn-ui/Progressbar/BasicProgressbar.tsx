import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Basicprogressbar from './code/BasicProgressbarCode';
import BasicprogressbarCode from './code/BasicProgressbarCode.tsx?raw';

const BasicProgressbar = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Basic Progress</h4>
          <Basicprogressbar />
        </div>
        <CodeDialog>{BasicprogressbarCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default BasicProgressbar;
