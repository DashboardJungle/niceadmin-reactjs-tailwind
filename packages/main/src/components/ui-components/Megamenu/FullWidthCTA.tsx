import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import FullWidthCTa from './Code/FullWidthCTACode';
import FullWidthCTaCode from './Code/FullWidthCTACode.tsx?raw';

const FullWidthCTA = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Full Width With CTA</h4>
            <FullWidthCTa />
          </div>
          <CodeDialog>{FullWidthCTaCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FullWidthCTA;
