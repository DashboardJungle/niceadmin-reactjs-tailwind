import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Reviewtypo from './Code/ReviewTypoCode';
import ReviewtypoCode from './Code/ReviewTypoCode.tsx?raw';

const ReviewTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">User testimonial</h4>
            <Reviewtypo />
          </div>
          <CodeDialog>{ReviewtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ReviewTypo;
