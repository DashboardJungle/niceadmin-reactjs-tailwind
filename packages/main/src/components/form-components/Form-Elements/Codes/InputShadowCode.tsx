import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { Link } from 'react-router';

const InputShadowCode = () => {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2">Your email</Label>
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@niceadmin.com"
            className="!form-control"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2">Your password</Label>
          </div>
          <TextInput id="password2" type="password" className="!form-control" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password">Repeat password</Label>
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            className="!form-control"
            required
            shadow
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link to="#" className="text-priamry hover:underline dark:text-primary">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit" color="primary" className="w-fit">
          Register new account
        </Button>
      </form>
    </>
  );
};

export default InputShadowCode;
