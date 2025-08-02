
import { Label, TextInput, Checkbox, Button } from 'flowbite-react'

const RoundInputsCodes = () => {
  return (
    <>
      <form className='flex flex-col gap-4'>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email1'>Your email</Label>
          </div>
          <TextInput
            id='email1'
            type='email'
            placeholder='name@niceadmin.com'
            required
            className='!form-control-rounded'
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password1'>Your password</Label>
          </div>
          <TextInput
            id='password1'
            type='password'
            required
            className='!form-control-rounded'
          />
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox className='checkbox' id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button type='submit' color='primary' className='w-fit'>
          Submit
        </Button>
      </form>
    </>
  )
}

export default RoundInputsCodes
