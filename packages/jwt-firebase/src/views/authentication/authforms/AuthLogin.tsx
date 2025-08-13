import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from 'src/guards/auth/AuthContext';

import { SetStateAction, useContext, useState } from "react";

const AuthLogin = () => {

  const [email, setEmail] = useState<string>("niceadmin@gmail.com");
  const [password, setPassword] = useState<string>("niceadmin1234");
  const [_, setError] = useState<string>("");
  let router = useNavigate();
  const { signin }: any = useContext(AuthContext);


  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await signin(email, password);
      router("/");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      <form className='mt-6' onSubmit={handleLogin}>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='email'>Email</Label>
          </div>
          <TextInput
            id='email'
            type='email'
            sizing='md'
            className='!form-control'
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='userpwd'>Password</Label>
          </div>
          <TextInput
            id='userpwd'
            type='password'
            sizing='md'
            className='!form-control'
            value={password}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className='flex justify-between my-5'>
          <div className='flex items-center gap-2'>
            <Checkbox id='accept' className='checkbox border-ld' />
            <Label
              htmlFor='accept'
              className='opacity-90 font-normal cursor-pointer'>
              Remeber this Device
            </Label>
          </div>
          <Link
            to={'/auth/auth1/forgot-password'}
            className='text-primary text-sm font-medium'>
            Forgot Password ?
          </Link>
        </div>
        <Button
          color={'secondary'}
          type="submit"

          className='w-full rounded-md'>
          Sign In
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
