import ArrowKeys from 'src/components/ui-components/Kbd/ArrowKeys';
import DefaultKbd from 'src/components/ui-components/Kbd/DefaultKbd';
import FunctionKeys from 'src/components/ui-components/Kbd/FunctionKeys';
import InsideTable from 'src/components/ui-components/Kbd/InsideTable';
import InsideText from 'src/components/ui-components/Kbd/InsideText';
import LetterKeys from 'src/components/ui-components/Kbd/LetterKeys';
import NumbersKeys from 'src/components/ui-components/Kbd/NumbersKeys';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'KBD',
  desc: 'A KBD is a UI component used to display keyboard inputs or shortcuts in a styled, readable format.',
};

const allApis = [
  {
    id: '1',
    prop: 'icon',
    description: 'To show arrow keys inside the KBD styled element.',
    type: `'MdKeyboardArrowUp' | 'MdKeyboardArrowDown'`,
    default: '-',
  },
];

const FlowbiteKbd = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default KBD*/}
        <div className="col-span-12">
          <DefaultKbd />
        </div>
        {/* Inside Text KBD*/}
        <div className="col-span-12">
          <InsideText />
        </div>
        {/* Inside Table KBD*/}
        <div className="col-span-12">
          <InsideTable />
        </div>
        {/* Arrow Keys KBD*/}
        <div className="col-span-12">
          <ArrowKeys />
        </div>
        {/* Function Keys KBD*/}
        <div className="col-span-12">
          <FunctionKeys />
        </div>
        {/* Letter Keys KBD*/}
        <div className="col-span-12">
          <LetterKeys />
        </div>
        {/* Numbers Keys KBD*/}
        <div className="col-span-12">
          <NumbersKeys />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="KBD" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteKbd;
