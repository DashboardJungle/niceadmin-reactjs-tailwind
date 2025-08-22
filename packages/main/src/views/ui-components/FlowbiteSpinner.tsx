import AlignSpinner from 'src/components/ui-components/Spinner/AlignSpinner';
import ColorSpinner from 'src/components/ui-components/Spinner/ColorSpinner';
import DefaultSpinner from 'src/components/ui-components/Spinner/DefaultSpinner';
import LoadButton from 'src/components/ui-components/Spinner/LoadButton';
import SizingSpinner from 'src/components/ui-components/Spinner/SizingSpinner';
import ComponentApi from 'src/components/ui-components/ComponentApi';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Spinner',
  desc: 'A Spinner is a UI component used to show loading or processing states in the interface.',
};

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the color of the spinner.',
    type: `'info' | 'success' | 'warning' | 'purple'`,
    default: `'default'`,
  },
  {
    id: '2',
    prop: 'size',
    description: 'Determines the size of the spinner.',
    type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
    default: `'md'`,
  },
];

const FlowbiteSpinner = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <DefaultSpinner />
        </div>
        {/* Color Spinner */}
        <div className="col-span-12">
          <ColorSpinner />
        </div>
        {/* Sizing Spinner */}
        <div className="col-span-12">
          <SizingSpinner />
        </div>
        {/* Align Spinner */}
        <div className="col-span-12">
          <AlignSpinner />
        </div>
        {/* Load Button */}
        <div className="col-span-12">
          <LoadButton />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Spinner" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteSpinner;
