import Intro from 'src/components/component-page/shared/Intro';
import ColorCheckbox from 'src/components/ui-components/Checkbox/ColorCheckbox';
import DefaultCheckbox from 'src/components/ui-components/Checkbox/DefaultCheckbox';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const intro = {
  heading: 'Checkbox',
  desc: 'A Checkbox is a UI component used to select one or more options from a set.',
};

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the background color of the checkbox.',
    type: `"primary" | "secondary" | "success" | "info"`,
    default: `"default"`,
  },
];

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* default */}
        <div className="col-span-12">
          <DefaultCheckbox />
        </div>
        {/* Color */}
        <div className="col-span-12">
          <ColorCheckbox />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Checkbox" />
        </div>
      </div>
    </>
  );
};

export default page;
