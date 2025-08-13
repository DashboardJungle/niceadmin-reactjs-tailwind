import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";

const AuthRegister = () => {
  return (
    <>
      <form className='mt-6'>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='name' className='font-semibold'>
              Name
            </Label>
          </div>
          <TextInput
            id='name'
            type='text'
            sizing='md'
            className='!form-control'
          />
        </div>
        <div className='mb-4'>
          <div className='mb-2 block'>
            <Label htmlFor='emadd' className='font-semibold'>
              Email Address
            </Label>
          </div>
          <TextInput
            id='emadd'
            type='email'
            sizing='md'
            className='!form-control'
          />
        </div>
        <div className='mb-6'>
          <div className='mb-2 block'>
            <Label htmlFor='userpwd' className='font-semibold'>
              Password
            </Label>
          </div>
          <TextInput
            id='userpwd'
            type='password'
            sizing='md'
            className='!form-control'
          />
        </div>
        <Button color={'secondary'} className='w-full rounded-md' as={Link} to='/'
        >
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default AuthRegister
