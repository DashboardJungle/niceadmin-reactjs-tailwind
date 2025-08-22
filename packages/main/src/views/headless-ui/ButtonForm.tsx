import BasicButtons from 'src/components/headless-form/Button/BasicButtons';
import LightButtons from 'src/components/headless-form/Button/LightButtons';
import RoundedOutlineBtn from 'src/components/headless-form/Button/RoundedOutlineBtn';
import SquareOutlineBtn from 'src/components/headless-form/Button/SquareOutlineBtn';
import DisableButton from 'src/components/headless-form/Button/DisableButton';
import DisableOutlineButtons from 'src/components/headless-form/Button/DisableOutlineButtons';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Buttons',
  desc: 'A Button is a UI component that triggers an action or event when clicked or tapped.',
};

const ButtonForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicButtons />
        </div>
        <div className="col-span-12">
          <LightButtons />
        </div>
        <div className="col-span-12">
          <RoundedOutlineBtn />
        </div>
        <div className="col-span-12">
          <SquareOutlineBtn />
        </div>
        <div className="col-span-12">
          <DisableButton />
        </div>
        <div className="col-span-12">
          <DisableOutlineButtons />
        </div>
      </div>
    </>
  );
};

export default ButtonForm;
