import Intro from 'src/components/component-page/shared/Intro';
import BasicDialog from 'src/components/shadcn-ui/Dialog/BasicDialog';
import DialogWithCustomCloseButton from 'src/components/shadcn-ui/Dialog/DialogWithCustomCloseButton';
import DialogWithForm from 'src/components/shadcn-ui/Dialog/DialogWithForm';

const intro = {
  heading: 'Dialog',
  desc: 'A Dialog is a UI component that displays a modal window for user interactions, alerts, or confirmations.',
};

const ShadcnDialog = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicDialog />
        </div>
        <div className="col-span-12">
          <DialogWithCustomCloseButton />
        </div>
        <div className="col-span-12">
          <DialogWithForm />
        </div>
      </div>
    </>
  );
};

export default ShadcnDialog;
