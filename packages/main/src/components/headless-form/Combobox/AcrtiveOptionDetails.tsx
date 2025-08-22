import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import AcrtiveOptionDetail from './Codes/AcrtiveOptionDetailsCode';
import AcrtiveOptionDetailCode from './Codes/AcrtiveOptionDetailsCode.tsx?raw';

const ActiveOptionDetails = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rendering Active Option Details</h4>
            <AcrtiveOptionDetail />
          </div>
          <CodeDialog>{AcrtiveOptionDetailCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ActiveOptionDetails;
