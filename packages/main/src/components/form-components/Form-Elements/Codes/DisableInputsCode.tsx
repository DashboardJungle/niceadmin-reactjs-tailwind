import { Label, TextInput } from 'flowbite-react';

const DisableInputsCode = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Label htmlFor="disabledInput1">API token</Label>
        <TextInput
          type="text"
          id="disabledInput1"
          placeholder="Disabled input"
          className="!form-control"
          disabled
        />
        <Label htmlFor="disabledInput2">Personal access token</Label>
        <TextInput
          type="text"
          id="disabledInput2"
          placeholder="Disabled readonly input"
          disabled
          className="!form-control"
          readOnly
        />
      </div>
    </>
  );
};

export default DisableInputsCode;
