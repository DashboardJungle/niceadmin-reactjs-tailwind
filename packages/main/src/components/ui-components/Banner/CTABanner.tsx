import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import CTAbanner from './Code/CTABannerCode';
import CTAbannerCode from './Code/CTABannerCode.tsx?raw';

const CTABanner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Marketing CTA banner</h4>
            <CTAbanner />
          </div>
          <CodeDialog>{CTAbannerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CTABanner;
