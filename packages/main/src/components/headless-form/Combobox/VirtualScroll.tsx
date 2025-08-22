import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import VirtualScroll from './Codes/VirtualScrollCode';
import VirtualScrollCode from './Codes/VirtualScrollCode.tsx?raw';

const VirtualScrollingCombo = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Virtual Scrolling</h4>
            <VirtualScroll />
          </div>
          <CodeDialog>{VirtualScrollCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default VirtualScrollingCombo;
