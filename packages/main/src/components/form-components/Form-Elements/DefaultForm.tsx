import CardBox from '../../shared/CardBox';
import Defaultform from './Codes/DefaultFormCode';
import DefaultformCode from './Codes/DefaultFormCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const DefaultForm = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Default Form</h4>
          <Defaultform />
        </div>
        <CodeDialog>{DefaultformCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default DefaultForm;
