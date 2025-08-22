import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import DropdownMenuCheckbox from './code/DropdownMenuCheckboxesCode';
import DropdownMenuCheckboxCode from './code/DropdownMenuCheckboxesCode.tsx?raw';

export function DropdownMenuCheckboxes() {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Dropdown With Checkbox</h4>
          <DropdownMenuCheckbox />
        </div>
        <CodeDialog>{DropdownMenuCheckboxCode}</CodeDialog>
      </div>
    </CardBox>
  );
}
