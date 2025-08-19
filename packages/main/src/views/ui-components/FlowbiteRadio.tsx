import Intro from 'src/components/component-page/shared/Intro';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import ColorRadio from 'src/components/ui-components/Radio/ColorRadio';
import DefaultRadio from 'src/components/ui-components/Radio/DefaultRadio';

const intro = {
  heading: 'Radio',
  desc: 'A Radio is a UI component used to select a single option from a group.',
};

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the background color of the Radio.',
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
        {/* default radio */}
        <div className="col-span-12">
          <DefaultRadio />
        </div>
        {/* color radio */}
        <div className="col-span-12">
          <ColorRadio />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Radio" />
        </div>
      </div>
    </>
  );
};

export default page;
