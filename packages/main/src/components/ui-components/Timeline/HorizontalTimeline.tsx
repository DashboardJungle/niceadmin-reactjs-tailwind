import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Horizontaltimeline from './Code/HorizontalTimelineCode';
import HorizontaltimelineCode from './Code/HorizontalTimelineCode.tsx?raw';

const HorizontalTimeline = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Horizontal Timeline</h4>
            <Horizontaltimeline />
          </div>
          <CodeDialog>{HorizontaltimelineCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default HorizontalTimeline;
