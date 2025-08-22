import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RenderAsElementab from './Code/RenderAsElementTabCode';
import RenderAsElementabCode from './Code/RenderAsElementTabCode.tsx?raw';

const RenderAsElementTab = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rendering As Different Elements</h4>
            <RenderAsElementab />
          </div>
          <CodeDialog>{RenderAsElementabCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderAsElementTab;
