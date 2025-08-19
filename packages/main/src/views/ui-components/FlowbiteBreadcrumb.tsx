import Intro from 'src/components/component-page/shared/Intro';
import BackgroundBread from 'src/components/ui-components/Breadcrumb/BackgroundBread';
import Default from 'src/components/ui-components/Breadcrumb/Default';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const intro = {
  heading: 'Breadcrumb',
  desc: 'A Breadcrumb is a UI component used to display the navigational path and help users understand their location within a website or app.',
};

const allApis = [
  {
    id: '1',
    prop: 'icon',
    description: 'An optional icon to display alongside the breadcrumb item.',
    type: `'HiHome'`,
    default: '-',
  },
];

const FlowbiteBreadcrumb = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default  */}
        <div className="col-span-12">
          <Default />
        </div>
        {/* background color  */}
        <div className="col-span-12">
          <BackgroundBread />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Breadcrumb" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteBreadcrumb;
