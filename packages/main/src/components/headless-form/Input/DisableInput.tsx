import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Disableinput from './Codes/DisableInputCode';
import DisableinputCode from './Codes/DisableInputCode.tsx?raw';

const DisabledInput = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Disabled Input With Description</h4>
            <Disableinput />
          </div>
          <CodeDialog>{DisableinputCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisabledInput;
