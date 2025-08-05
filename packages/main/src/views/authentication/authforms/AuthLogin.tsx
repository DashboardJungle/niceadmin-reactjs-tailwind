import { Button, Checkbox, Label, TextInput, Spinner, Alert, HelperText } from "flowbite-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "src/context/AuthContext";
import { SetStateAction, useContext, useState } from 'react';


const AuthLogin = () => {

  const [email, setEmail] = useState("cameron@gmail.com");
  const [password, setPassword] = useState("cameron1234");


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [loading, setLoading] = useState(false);
  const router = useNavigate();
  const { signin } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setGeneralError('');

    setLoading(true);

    const allowedEmail = 'cameron@gmail.com';
    const allowedPassword = 'cameron1234';


    let isValid = true;

    if (email !== allowedEmail) {
      setEmailError('Invalid email address.');
      isValid = false;
    }

    if (password !== allowedPassword) {
      setPasswordError('Invalid password.');
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }


    try {
      await signin(email, password);
      router('/');
    } catch (err: any) {

      setGeneralError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      {generalError && (
        <Alert color='error' className='mb-4'>
          {generalError}
        </Alert>
      )}
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
          <HelperText color='failure'>
            {emailError}
          </HelperText>
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
          <HelperText color='failure'>
            {passwordError}
          </HelperText>
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
          {loading ? (
            <Spinner size="md" />
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;


