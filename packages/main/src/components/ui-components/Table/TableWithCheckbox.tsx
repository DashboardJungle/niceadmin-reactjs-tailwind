import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import TableWithcheckbox from './Code/TableWithCheckboxCode';
import TableWithcheckboxCode from './Code/TableWithCheckboxCode.tsx?raw';

const TableWithCheckbox = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Table With Checkboxes</h4>
            <TableWithcheckbox />
          </div>
          <CodeDialog>{TableWithcheckboxCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TableWithCheckbox;
