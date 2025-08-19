import Intro from 'src/components/component-page/shared/Intro';
import BasicTransition from 'src/components/headless-ui/Transition/BasicTransition';
import ClickTransition from 'src/components/headless-ui/Transition/ClickTransition';
import CoordinationTransition from 'src/components/headless-ui/Transition/CoordinationTransition';
import EnterLeaveTransition from 'src/components/headless-ui/Transition/EnterLeaveTransition';
import OnIntialAmmount from 'src/components/headless-ui/Transition/OnIntialAmmount';

const intro = {
  heading: 'Transition',
  desc: 'A Transition is a UI component that manages the animation of elements as they enter or leave the DOM.',
};

const Transition = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicTransition />
        </div>
        <div className="col-span-12">
          <EnterLeaveTransition />
        </div>
        <div className="col-span-12">
          <CoordinationTransition />
        </div>
        <div className="col-span-12">
          <ClickTransition />
        </div>
        <div className="col-span-12">
          <OnIntialAmmount />
        </div>
      </div>
    </>
  );
};

export default Transition;
