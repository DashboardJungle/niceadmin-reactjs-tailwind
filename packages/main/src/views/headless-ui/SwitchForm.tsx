import BasicSwitches from 'src/components/headless-form/Switch/BasicSwitches';
import DefaultOnSwitches from 'src/components/headless-form/Switch/DefaultOnSwitches';
import DisabledSwitches from 'src/components/headless-form/Switch/DisabledSwitches';
import WithLabelSwitch from 'src/components/headless-form/Switch/WithLabelSwitch';
import WithTransitionsSwitch from 'src/components/headless-form/Switch/WithTransitions';
import RenderSwitches from 'src/components/headless-form/Switch/RenderSwitches';
import Intro from 'src/components/component-page/shared/Intro';

const intro = {
  heading: 'Switch',
  desc: 'A Switch is a UI component that toggles between two states, such as on and off.',
};

const SwitchForm = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        <div className="col-span-12">
          <BasicSwitches />
        </div>
        <div className="col-span-12">
          <DefaultOnSwitches />
        </div>
        <div className="col-span-12">
          <DisabledSwitches />
        </div>
        <div className="col-span-12">
          <WithLabelSwitch />
        </div>
        <div className="col-span-12">
          <WithTransitionsSwitch />
        </div>
        <div className="col-span-12">
          <RenderSwitches />
        </div>
      </div>
    </>
  );
};

export default SwitchForm;
