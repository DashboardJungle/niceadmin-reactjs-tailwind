import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Informationalbanner from './Code/InformationalBannerCode';
import InformationalbannerCode from './Code/InformationalBannerCode.tsx?raw';

const InformationalBanner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Informational Banner</h4>
            <Informationalbanner />
          </div>
          <CodeDialog>{InformationalbannerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default InformationalBanner;
