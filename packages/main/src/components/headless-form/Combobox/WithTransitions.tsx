import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import WithTransition from './Codes/WithTransitionsCode';
import WithTransitionCode from './Codes/WithTransitionsCode.tsx?raw';

const WithTransitions = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">With Transitions</h4>
            <WithTransition />
          </div>
          <CodeDialog>{WithTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithTransitions;
