import { Label, TextInput, HelperText } from 'flowbite-react';

const FormValidationSuccessCode = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="username3" color="success">
          Your name
        </Label>
      </div>
      <TextInput id="username" placeholder="Bonnie Green" required color="success" />
      <HelperText color="success">
        <span className="font-medium">Alright!</span> Username available!
      </HelperText>
    </div>
  );
};

export default FormValidationSuccessCode;
