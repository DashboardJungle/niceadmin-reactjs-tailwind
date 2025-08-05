import { Button, HelperText, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";
import { AuthContext } from 'src/context/AuthContext';
import React, { SetStateAction, useContext, useState } from 'react';


const AuthRegister = () => {

  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [_, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useNavigate();
  const { signup }: any = useContext(AuthContext);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const errors = {
      password: '',
    };

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (errors.password) {
      setFormErrors({ password: errors.password, name: '', email: '' });
      return;
    }

    setFormErrors({ name: '', email: '', password: '' });

    try {
      await signup(email, password, userName);
      router("/");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      <form className='mt-6' onSubmit={handleRegister}>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='name' className='font-semibold'>
              Name  <span style={{ color: 'red' }}>*</span>
            </Label>
          </div>
          <TextInput
            id='name'
            type='text'
            sizing='md'
            className='!form-control'
            value={userName}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setuserName(e.target.value)
            }
            required
          />
        </div>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='emadd' className='font-semibold'>
              Email Address <span style={{ color: 'red' }}>*</span>
            </Label>
          </div>
          <TextInput
            id='emadd'
            type='email'
            sizing='md'
            className='!form-control'
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
            required

          />
        </div>
        <div className='mb-6'>
          <div className='mb-2 block'>
            <Label htmlFor='userpwd' className='font-semibold'>
              Password <span style={{ color: 'red' }}>*</span>
            </Label>
          </div>
          <TextInput
            id='userpwd'
            type='password'
            sizing='md'
            className='!form-control'
            value={password}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)}
            required
          />
          <HelperText color='failure'>
            {formErrors.password}
          </HelperText>
        </div>
        <Button color={'secondary'} className='w-full rounded-md'
          disabled={!userName.trim() || !email.trim() || !password.trim()}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default AuthRegister
