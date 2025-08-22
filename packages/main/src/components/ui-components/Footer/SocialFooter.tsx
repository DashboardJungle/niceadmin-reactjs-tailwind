import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Socialfooter from './Code/SocialFooterCode';
import SocialfooterCode from './Code/SocialFooterCode.tsx?raw';

const SocialFooter = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Social media icons</h4>
            <Socialfooter />
          </div>
          <CodeDialog>{SocialfooterCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SocialFooter;
