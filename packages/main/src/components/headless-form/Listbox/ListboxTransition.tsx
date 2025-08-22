import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ListboxTransition from './Codes/ListboxTransitionCode';
import ListboxTransitionCode from './Codes/ListboxTransitionCode.tsx?raw';

const TransitionListBox = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Listbox With Transitions</h4>
            <ListboxTransition />
          </div>
          <CodeDialog>{ListboxTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TransitionListBox;
