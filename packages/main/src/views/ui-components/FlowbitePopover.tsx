import CompanyProfile from 'src/components/ui-components/Popover/CompanyProfile';
import ControlledPopover from 'src/components/ui-components/Popover/ControlledPopover';
import DefaultPopover from 'src/components/ui-components/Popover/DefaultPopover';
import DisableArrow from 'src/components/ui-components/Popover/DisableArrow';
import ImagePopover from 'src/components/ui-components/Popover/ImagePopover';
import PasswordPopover from 'src/components/ui-components/Popover/PasswordPopover';
import PlacementPopover from 'src/components/ui-components/Popover/PlacementPopover';
import TriggerType from 'src/components/ui-components/Popover/TriggerType';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Popover',
  desc: 'A Popover is a UI component used to display contextual information or actions in a small overlay that appears near a trigger element, typically on click or hover.',
};

const allApis = [
  {
    id: '1',
    prop: 'content',
    description: 'The content to display inside the popover.',
    type: `"<h3>PopOver Title</h3>"`,
    default: '-',
  },
  {
    id: '2',
    prop: 'trigger',
    description: 'Specifies how the popover is triggered.',
    type: '"hover" | "click"',
    default: '"hover"',
  },
  {
    id: '3',
    prop: 'placement',
    description: 'Determines the position of the popover relative to the trigger element.',
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
  },
  {
    id: '4',
    prop: 'arrow',
    description: 'If true, displays an arrow pointing to the trigger element.',
    type: 'boolean',
    default: 'true',
  },
  {
    id: '5',
    prop: 'open',
    description: 'Controls the visibility of the popover. When true, the popover is visible.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '6',
    prop: 'onOpenChange',
    description: 'Callback function that is called when the popover visibility changes.',
    type: 'setOpen',
    default: '-',
  },
];

const FlowbitePopover = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultPopover />
        </div>
        {/* Company Profile */}
        <div className="col-span-12">
          <CompanyProfile />
        </div>
        {/* Controlled Popover */}
        <div className="col-span-12">
          <ControlledPopover />
        </div>
        {/* Disable Arrow */}
        <div className="col-span-12">
          <DisableArrow />
        </div>
        {/* Image Popover */}
        <div className="col-span-12">
          <ImagePopover />
        </div>
        {/* Password Popover */}
        <div className="col-span-12">
          <PasswordPopover />
        </div>
        {/* Placement Popover */}
        <div className="col-span-12">
          <PlacementPopover />
        </div>
        {/* Trigger Type */}
        <div className="col-span-12">
          <TriggerType />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Popover" />
        </div>
      </div>
    </>
  );
};

export default FlowbitePopover;
