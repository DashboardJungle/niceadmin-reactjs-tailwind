import Intro from 'src/components/component-page/shared/Intro';
import BasicDialog from 'src/components/headless-ui/Dialog/BasicDialog';
import DialogWithBackdrop from 'src/components/headless-ui/Dialog/DialogWithBackdrop';
import FramerAnimationDialog from 'src/components/headless-ui/Dialog/FramerAnimationDialog';
import ScrollableDialog from 'src/components/headless-ui/Dialog/ScrollableDialog';
import TranstionDialog from 'src/components/headless-ui/Dialog/TranstionDialog';

const intro = {
  heading: 'Dialog',
  desc: 'A Dialog is a UI component that displays a modal window for focused interactions, such as alerts or forms.',
};

const Dialog = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicDialog />
        </div>
        <div className="col-span-12">
          <DialogWithBackdrop />
        </div>
        <div className="col-span-12">
          <ScrollableDialog />
        </div>
        <div className="col-span-12">
          <TranstionDialog />
        </div>
        <div className="col-span-12">
          <FramerAnimationDialog />
        </div>
      </div>
    </>
  );
};

export default Dialog;
