import { Label, TextInput, Button, HelperText } from 'flowbite-react'

import TitleCard from '../../shared/TitleBorderCard'
import { Link } from 'react-router'


const DisableForm = () => {
  return (
    <div>
      <TitleCard title='Disabled Form'>
        <div className='grid grid-cols-4 gap-30'>
          <div className='col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='disabledInput1'>Name</Label>
            </div>
            <TextInput
              id='disabledInput1'
              type='text'
              sizing='md'
              className='form-control'
              disabled
            />
          </div>
          <div className='col-span-12'>
            <div className='mb-2 block'>
              <Label htmlFor='disabledInput1'>Email</Label>
            </div>
            <TextInput
              id='disabledInput1'
              type='email'
              required
              className='form-control'
              disabled
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
              <Label htmlFor='disabledInput1'>Password</Label>
            </div>
            <TextInput
              id='disabledInput1'
              type='password'
              className='form-control'
              disabled
            />
          </div>
          <div className='col-span-12'>
            <Button type='submit' color='primary' disabled>
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  )
}

export default DisableForm
