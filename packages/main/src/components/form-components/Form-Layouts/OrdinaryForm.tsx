import { Label, TextInput, Checkbox, Button, HelperText } from 'flowbite-react'

import TitleCard from '../../shared/TitleBorderCard'
import { Link } from 'react-router'


const OrdinaryForm = () => {
  return (
    <div>
      <TitleCard title='Ordrinary Form'>
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='email1'>Email</Label>
            </div>
            <TextInput
              id='email3'
              type='email'
              placeholder='name@materialm.com'
              required
              className='!form-control'
            />
            <HelperText>
              <span>We’ll never share your details. Read our</span>
              <Link
                to={'#'}
                className='ml-1 font-medium text-primary hover:underline dark:text-primary'>
                Privacy Policy
              </Link>
            </HelperText>
          </div>
          <div className='col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='password1'>Password</Label>
            </div>
            <TextInput
              id='password1'
              type='password'
              className='!form-control'
              required
            />
          </div>
          <div className='flex items-center gap-2 col-span-12'>
            <Checkbox className='checkbox' id='remember' />
            <Label htmlFor='remember'>RememberMe!</Label>
          </div>
          <div className='col-span-12'>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  )
}

export default OrdinaryForm
