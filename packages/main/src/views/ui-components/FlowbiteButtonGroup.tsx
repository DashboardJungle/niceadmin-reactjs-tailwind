import ColorOptions from 'src/components/ui-components/ButtonGroup/ColorOptions';
import DefaultGroup from 'src/components/ui-components/ButtonGroup/DefaultGroup';
import GroupWithIcon from 'src/components/ui-components/ButtonGroup/GroupWithIcon';
import OutlineButtonGroup from 'src/components/ui-components/ButtonGroup/OutlineButtonGroup';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Button Group',
  desc: 'A Button Group is a UI component used to group multiple buttons together for related actions.',
};

const allApis = [
  {
    id: '1',
    prop: 'outline',
    description: 'Making buttons border-only with transparent backgrounds.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'color',
    description: 'Specifies the color scheme of the buttons within the group.',
    type: `'primary' | 'secondary' | 'success' | 'warning'`,
    default: 'Default',
  },
];

const FlowbiteButtonGroup = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultGroup />
        </div>
        {/* Outline Button Group */}
        <div className="col-span-12">
          <OutlineButtonGroup />
        </div>
        {/* Color Options */}
        <div className="col-span-12">
          <ColorOptions />
        </div>
        {/* Group With Icon */}
        <div className="col-span-12">
          <GroupWithIcon />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Button Group" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteButtonGroup;
