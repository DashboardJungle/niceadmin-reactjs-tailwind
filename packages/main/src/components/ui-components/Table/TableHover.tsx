import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Tablehover from './Code/TableHoverCode';
import TablehoverCode from './Code/TableHoverCode.tsx?raw';

const TableHover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Table hover state</h4>
            <Tablehover />
          </div>
          <CodeDialog>{TablehoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TableHover;
