import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Sizingmodal from './Code/SizingModalCode';
import SizingmodalCode from './Code/SizingModalCode.tsx?raw';

const SizingModal = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sizing options</h4>
            <Sizingmodal />
          </div>
          <CodeDialog>{SizingmodalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SizingModal;
