import Intro from 'src/components/component-page/shared/Intro';
import BasicDisclosure from 'src/components/headless-ui/Disclosure/BasicDisclosure';
import DisclosureManually from 'src/components/headless-ui/Disclosure/DisclosureManually';
import FramerDiclosure from 'src/components/headless-ui/Disclosure/FramerDiclosure';
import RenderingDisclosure from 'src/components/headless-ui/Disclosure/RenderingDisclosure';
import TransitionDisclosure from 'src/components/headless-ui/Disclosure/TransitionDisclosure';

const intro = {
  heading: 'Disclosure',
  desc: 'A Disclosure is a UI component that toggles the visibility of hidden content, typically used for progressive disclosure.',
};

const Disclosure = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicDisclosure />
        </div>
        <div className="col-span-12">
          <TransitionDisclosure />
        </div>
        <div className="col-span-12">
          <DisclosureManually />
        </div>
        <div className="col-span-12">
          <RenderingDisclosure />
        </div>
        <div className="col-span-12">
          <FramerDiclosure />
        </div>
      </div>
    </>
  );
};

export default Disclosure;
