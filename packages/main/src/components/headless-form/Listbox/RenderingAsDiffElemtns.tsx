import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RenderingAsDiffElemtn from './Codes/RenderingAsDiffElemtnsCode';
import RenderingAsDiffElemtnCode from './Codes/RenderingAsDiffElemtnsCode.tsx?raw';

const RenderingAsDiffElemtns = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rendering as Different Elements </h4>
            <RenderingAsDiffElemtn />
          </div>
          <CodeDialog>{RenderingAsDiffElemtnCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderingAsDiffElemtns;
