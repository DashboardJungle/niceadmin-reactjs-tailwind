import { Label, TextInput } from 'flowbite-react';

const InputWithAlterIconCode = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="username3">Username</Label>
      </div>
      <TextInput
        id="username3"
        placeholder="Bonnie Green"
        addon="@"
        className="!form-control"
        required
      />
    </div>
  );
};

export default InputWithAlterIconCode;
