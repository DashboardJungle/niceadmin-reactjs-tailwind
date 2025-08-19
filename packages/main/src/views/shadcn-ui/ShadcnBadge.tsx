import DefaultBadge from 'src/components/shadcn-ui/Badge/DefaultBadge';
import OutlineBadge from 'src/components/shadcn-ui/Badge/OutlineBadge';
import LinkBadge from 'src/components/shadcn-ui/Badge/LinkBadge';
import BadgeWithIconText from 'src/components/shadcn-ui/Badge/BadgeWithIconText';
import Iconbadge from 'src/components/shadcn-ui/Badge/IconBadge';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Badge',
  desc: 'A Badge is a UI component used to display small, contextual labels or status indicators.',
};

const ShadcnBadge = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <DefaultBadge />
        </div>
        <div className="col-span-12">
          <OutlineBadge />
        </div>
        <div className="col-span-12">
          <LinkBadge />
        </div>
        <div className="col-span-12">
          <BadgeWithIconText />
        </div>
        <div className="col-span-12">
          <Iconbadge />
        </div>
      </div>
    </>
  );
};

export default ShadcnBadge;
