import CardBox from '../../shared/CardBox';
import StarRating from './Code/StarRatingCode';
import StarRatingCode from './Code/StarRatingCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const StarRatting = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Star sizing</h4>
            <StarRating />
          </div>
          <CodeDialog>{StarRatingCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default StarRatting;
