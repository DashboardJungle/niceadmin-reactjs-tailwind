import { useState } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from 'src/components/shadcn-ui/Default-Ui/input-otp';

const ControlledOtpInputCode = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="space-y-2">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value: React.SetStateAction<string>) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className=" text-sm text-ld">
          {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
        </div>
      </div>
    </>
  );
};

export default ControlledOtpInputCode;
