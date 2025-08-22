import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Transitiondropdown from './Codes/TransitionDropdownCode';
import TransitiondropdownCode from './Codes/TransitionDropdownCode.tsx?raw';

const TransitionDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Transitions</h4>
            <Transitiondropdown />
          </div>
          <CodeDialog>{TransitiondropdownCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TransitionDropdown;
