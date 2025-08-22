import BasicDropdown from 'src/components/shadcn-ui/Dropdown/BasicDropdown';
import DropdownWithRadio from 'src/components/shadcn-ui/Dropdown/DropdownWithRadio';
import { DropdownMenuCheckboxes } from 'src/components/shadcn-ui/Dropdown/DropdownMenuCheckboxes';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Dropdown',
  desc: 'A Dropdown is a UI component that reveals a list of options or actions when triggered.',
};

const ShadcnDropdown = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicDropdown />
        </div>
        <div className="col-span-12">
          <DropdownWithRadio />
        </div>
        <div className="col-span-12">
          <DropdownMenuCheckboxes />
        </div>
      </div>
    </>
  );
};

export default ShadcnDropdown;
