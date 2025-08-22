import BasicCollapse from 'src/components/shadcn-ui/Collapsible/BasicCollapse';
import AdvanceCollapse from 'src/components/shadcn-ui/Collapsible/AdvanceCollapse';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Collapsible',
  desc: 'A Collapsible is a UI component that expands or hides content sections when toggled.',
};

const ShadcnCollapsible = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicCollapse />
        </div>
        <div className="col-span-12">
          <AdvanceCollapse />
        </div>
      </div>
    </>
  );
};

export default ShadcnCollapsible;
