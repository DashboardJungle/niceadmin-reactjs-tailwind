import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RendringElement from './Codes/RendringElementsCode';
import RendringElementCode from './Codes/RendringElementsCode.tsx?raw';

const RendringElements = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rendering Elements</h4>
            <RendringElement />
          </div>
          <CodeDialog>{RendringElementCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RendringElements;
