import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import RenderAsProp from './Codes/RenderAsPropsCode';
import RenderAsPropCode from './Codes/RenderAsPropsCode.tsx?raw';

const RenderAsProps = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Render Props</h4>
            <RenderAsProp />
          </div>
          <CodeDialog>{RenderAsPropCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderAsProps;
