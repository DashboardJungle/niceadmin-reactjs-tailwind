import Intro from 'src/components/component-page/shared/Intro';
import BasicPopover from 'src/components/headless-ui/Popover/BasicPopover';
import ClosingPopoverManual from 'src/components/headless-ui/Popover/ClosingPopoverManual';
import FramerMotionPopover from 'src/components/headless-ui/Popover/FramerMotionPopover';
import GroupingPopover from 'src/components/headless-ui/Popover/GroupingPopover';
import PopoverBackdrops from 'src/components/headless-ui/Popover/PopoverBackdrop';
import PopoverPositioning from 'src/components/headless-ui/Popover/PopoverPositioning';
import PopoverTransition from 'src/components/headless-ui/Popover/PopoverTransition';
import PopoverWidth from 'src/components/headless-ui/Popover/PopoverWidth';
import RenderAsElement from 'src/components/headless-ui/Popover/RenderAsElement';

const intro = {
  heading: 'Popover',
  desc: 'A Popover is a UI component that displays contextual content in a floating panel triggered by user interaction.',
};

const Popover = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicPopover />
        </div>
        <div className="col-span-12">
          <GroupingPopover />
        </div>
        <div className="col-span-12">
          <PopoverWidth />
        </div>
        <div className="col-span-12">
          <PopoverPositioning />
        </div>
        <div className="col-span-12">
          <PopoverBackdrops />
        </div>
        <div className="col-span-12">
          <PopoverTransition />
        </div>
        <div className="col-span-12">
          <FramerMotionPopover />
        </div>
        <div className="col-span-12">
          <ClosingPopoverManual />
        </div>
        <div className="col-span-12">
          <RenderAsElement />
        </div>
      </div>
    </>
  );
};

export default Popover;
