import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RenderAsdiv from './Codes/RenderAsDivCode';
import RenderAsdivCode from './Codes/RenderAsDivCode.tsx?raw';

const RenderAsDiv = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Render As a Div Elements</h4>
            <RenderAsdiv />
          </div>
          <CodeDialog>{RenderAsdivCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderAsDiv;
