import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Triggertype from './Code/TriggerTypeCode';
import TriggertypeCode from './Code/TriggerTypeCode.tsx?raw';

const TriggerType = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Trigger Type</h4>
            <Triggertype />
          </div>
          <CodeDialog>{TriggertypeCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TriggerType;
