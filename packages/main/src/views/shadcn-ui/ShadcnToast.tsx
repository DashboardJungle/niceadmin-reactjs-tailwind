import TitleToast from 'src/components/shadcn-ui/Toast/TitleToast';
import ActionToast from 'src/components/shadcn-ui/Toast/ActionToast';
import DestructiveToast from 'src/components/shadcn-ui/Toast/DestructiveToast';
import PrimaryToast from 'src/components/shadcn-ui/Toast/PrimaryToast';
import SecondaryToast from 'src/components/shadcn-ui/Toast/SecondaryToast';
import WarningToast from 'src/components/shadcn-ui/Toast/WarningToast';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Toast',
  desc: 'A Toast is a UI component that brief notification that appears temporarily to inform users of events or actions.',
};

const ShadcnToast = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <TitleToast />
        </div>
        <div className="col-span-12">
          <ActionToast />
        </div>
        <div className="col-span-12">
          <DestructiveToast />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <PrimaryToast />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <SecondaryToast />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WarningToast />
        </div>
      </div>
    </>
  );
};

export default ShadcnToast;
