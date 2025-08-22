import { Description, Field, Input, Label } from '@headlessui/react';

const DisableInputCode = () => {
  return (
    <>
      <Field className="w-full mb-3" disabled>
        <Label className="mb-1 block text-ld data-[disabled]:opacity-50">Name</Label>
        <Description className="text-xs data-[disabled]:opacity-50">
          Use your real name so people will recognize you.
        </Description>
        <Input
          type="text"
          className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-[disabled]:opacity-50"
          name="full_name"
        />
      </Field>
      <Field className="w-full mb-3" disabled>
        <Label className="mb-1 block text-ld data-[disabled]:opacity-50">Email</Label>
        <Description className="text-xs data-[disabled]:opacity-50">
          Use your real Email so people will recognize you.
        </Description>
        <Input
          type="email"
          className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-[disabled]:opacity-50"
          name="full_name"
        />
      </Field>
      <Field className="w-full " disabled>
        <Label className="mb-1 block text-ld data-[disabled]:opacity-50">Password</Label>
        <Description className="text-xs data-[disabled]:opacity-50">
          Use your real Password so people will recognize you.
        </Description>
        <Input
          type="password"
          className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-[disabled]:opacity-50"
          name="full_name"
        />
      </Field>
    </>
  );
};

export default DisableInputCode;
