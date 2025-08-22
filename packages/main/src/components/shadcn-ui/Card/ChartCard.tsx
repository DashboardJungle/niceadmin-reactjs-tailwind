import CardBox from '../../shared/CardBox';
import Chartcard from './code/ChartCardCode';
import ChartcardCode from './code/ChartCardCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const ChartCard = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <Chartcard />
          </div>
          <CodeDialog>{ChartcardCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ChartCard;
