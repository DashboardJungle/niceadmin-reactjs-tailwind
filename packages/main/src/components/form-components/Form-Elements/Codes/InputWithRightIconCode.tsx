import { Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

const InputWithRightIconCode = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="email4">Your email</Label>
      </div>
      <TextInput
        id="email4"
        type="email"
        rightIcon={HiMail}
        className="!form-control"
        placeholder="name@niceadmin.com"
        required
      />
    </div>
  );
};

export default InputWithRightIconCode;
