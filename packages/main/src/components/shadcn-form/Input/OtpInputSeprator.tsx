import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import OtpInputseprator from './code/OtpInputSepratorCode';
import OtpInputsepratorCode from './code/OtpInputSepratorCode.tsx?raw';

const OtpInputSeprator = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">OTP Input Seprator</h4>
          <OtpInputseprator />
        </div>
        <CodeDialog>{OtpInputsepratorCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default OtpInputSeprator;
