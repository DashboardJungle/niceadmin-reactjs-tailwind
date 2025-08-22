import Intro from 'src/components/component-page/shared/Intro';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import ColorSwitch from 'src/components/ui-components/ToggleSwitch/ColorSwitch';
import DefaultSwitch from 'src/components/ui-components/ToggleSwitch/DefaultSwitch';
import SizeSwitch from 'src/components/ui-components/ToggleSwitch/SizeSwitch';

const intro = {
  heading: 'Toggle Switch',
  desc: 'A Toggle Switch is a UI component used to switch between two states, such as on and off.',
};

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the background color of the Toggle Switch.',
    type: `"blue" | "yellow" | "success" | "info"`,
    default: `"default"`,
  },
  {
    id: '2',
    prop: 'size',
    description: 'Sets the size of the Toggle Switch.',
    type: `"sm" | "md" | "lg"`,
    default: `"md"`,
  },
];

const FlowbiteToggleSwitch = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* default switch */}
        <div className="col-span-12">
          <DefaultSwitch />
        </div>
        {/* color switch */}
        <div className="col-span-12">
          <ColorSwitch />
        </div>
        {/* size switch */}
        <div className="col-span-12">
          <SizeSwitch />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Toggle Switch" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteToggleSwitch;
