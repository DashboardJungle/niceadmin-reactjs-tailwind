import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import HorizontalListbox from './Codes/HorizontalListBoxCode';
import HorizontalListboxCode from './Codes/HorizontalListBoxCode.tsx?raw';

const HorizontalListBox = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Horizontal Listbox</h4>
            <HorizontalListbox />
          </div>
          <CodeDialog>{HorizontalListboxCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default HorizontalListBox;
