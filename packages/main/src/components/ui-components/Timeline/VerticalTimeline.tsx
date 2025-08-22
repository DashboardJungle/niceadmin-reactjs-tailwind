import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Verticaltimeline from './Code/VerticalTimelineCode';
import VerticaltimelineCode from './Code/VerticalTimelineCode.tsx?raw';

const VerticalTimeline = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Vertical timeline</h4>
            <Verticaltimeline />
          </div>
          <CodeDialog>{VerticaltimelineCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default VerticalTimeline;
