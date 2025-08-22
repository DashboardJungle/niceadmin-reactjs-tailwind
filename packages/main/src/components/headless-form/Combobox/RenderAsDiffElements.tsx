import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RenderAsDiffElement from './Codes/RenderAsDiffElementsCode';
import RenderAsDiffElementCode from './Codes/RenderAsDiffElementsCode.tsx?raw';

const RenderingCombobox = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Rendering As Different Elements</h4>
          <RenderAsDiffElement />
        </div>
        <CodeDialog>{RenderAsDiffElementCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default RenderingCombobox;
