import DefaultTable from 'src/components/ui-components/Table/DefaultTable';
import StrippedTable from 'src/components/ui-components/Table/StrippedTable';
import TableHover from 'src/components/ui-components/Table/TableHover';
import TableWithCheckbox from 'src/components/ui-components/Table/TableWithCheckbox';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Table',
  desc: 'A Table is a UI component used to display structured data in rows and columns, allowing users to easily scan, compare, and analyze information.',
};

const allApis = [
  {
    id: '1',
    prop: 'hoverable',
    description: 'Enables hover effect on table rows.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'striped',
    description: 'Adds zebra-striping to rows within the table body.',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteTables = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultTable />
        </div>
        {/* Stripped Table */}
        <div className="col-span-12">
          <StrippedTable />
        </div>
        {/* Table Hover */}
        <div className="col-span-12">
          <TableHover />
        </div>
        {/* Table With Checkbox */}
        <div className="col-span-12">
          <TableWithCheckbox />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Tables" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTables;
