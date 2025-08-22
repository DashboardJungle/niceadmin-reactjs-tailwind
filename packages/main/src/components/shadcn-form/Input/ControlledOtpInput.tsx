import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ControlledOtpinput from './code/ControlledOtpInputCode';
import ControlledOtpinputCode from './code/ControlledOtpInputCode.tsx?raw';

const ControlledOtpInput = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Controlled OTP Input</h4>
          <ControlledOtpinput />
        </div>
        <CodeDialog>{ControlledOtpinputCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default ControlledOtpInput;
