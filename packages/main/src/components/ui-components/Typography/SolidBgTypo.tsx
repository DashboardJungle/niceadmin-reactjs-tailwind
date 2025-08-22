import CardBox from '../../shared/CardBox';
import SolidBgtypo from './Code/SolidBgTypoCode';
import SolidBgtypoCode from './Code/SolidBgTypoCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const SolidBgTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Solid Background</h4>
            <SolidBgtypo />
          </div>
          <CodeDialog>{SolidBgtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SolidBgTypo;
