import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ListboxWithMultipleval from './Codes/ListboxWithMultipleValCode';
import ListboxWithMultiplevalCode from './Codes/ListboxWithMultipleValCode.tsx?raw';

const ListboxWithMultipleVal = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Selecting Multiple Values</h4>
            <ListboxWithMultipleval />
          </div>
          <CodeDialog>{ListboxWithMultiplevalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListboxWithMultipleVal;
