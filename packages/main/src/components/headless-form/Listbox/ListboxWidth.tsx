import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Listboxwidth from './Codes/ListboxWidthCode';
import ListboxwidthCode from './Codes/ListboxWidthCode.tsx?raw';

const ListBoxWidth = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Listbox Width</h4>
            <Listboxwidth />
          </div>
          <CodeDialog>{ListboxwidthCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListBoxWidth;
