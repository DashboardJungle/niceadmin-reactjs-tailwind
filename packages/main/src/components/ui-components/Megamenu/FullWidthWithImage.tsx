import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import FullWidthWithimage from './Code/FullWidthWithImageCode';
import FullWidthWithimageCode from './Code/FullWidthWithImageCode.tsx?raw';

const FullWidthWithImage = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Full width with image</h4>
            <FullWidthWithimage />
          </div>
          <CodeDialog>{FullWidthWithimageCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FullWidthWithImage;
