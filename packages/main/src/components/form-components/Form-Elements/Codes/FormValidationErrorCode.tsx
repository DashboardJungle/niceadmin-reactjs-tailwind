import { Label, TextInput, HelperText } from 'flowbite-react';

const FormValidationErrorCode = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="username4" color="failure">
          Your name
        </Label>
      </div>
      <TextInput id="username4" placeholder="Bonnie Green" required color="failure" />
      <HelperText color="failure">
        <span className="font-medium">Oops!</span> Username already taken!
      </HelperText>
    </div>
  );
};

export default FormValidationErrorCode;
