import CardBox from '../../shared/CardBox';
import Feedbacktoast from './Code/FeedbackToastCode';
import FeedbacktoastCode from './Code/FeedbackToastCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const FeedbackToast = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Feedback Toast</h4>
            <Feedbacktoast />
          </div>
          <CodeDialog>{FeedbacktoastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FeedbackToast;
