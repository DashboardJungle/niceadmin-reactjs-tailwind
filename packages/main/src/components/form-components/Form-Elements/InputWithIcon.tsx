
import { Label, TextInput } from 'flowbite-react'

import CardBox from '../../shared/CardBox'
import { HiMail } from 'react-icons/hi'
const InputWithIcon = () => {
  return (
    <div>
      <CardBox>
        <h4 className='text-lg font-semibold'>Input groups with icon</h4>
        <div className='mb-[0.375rem]'>
          <div className='pb-3'>
            <div className='mb-2 block'>
              <Label htmlFor='email4'>Your email</Label>
            </div>
            <TextInput
              id='email4'
              type='email'
              icon={HiMail}
              className='!form-control'
              placeholder='name@niceadmin.com'
              required
            />
          </div>
          <div className='pb-3'>
            <div className='mb-2 block'>
              <Label htmlFor='email4'>Your email</Label>
            </div>
            <TextInput
              id='email4'
              type='email'
              rightIcon={HiMail}
              className='!form-control'
              placeholder='name@niceadmin.com'
              required
            />
          </div>
          <div className='pb-3'>
            <div className='mb-2 block'>
              <Label htmlFor='email4'>Your email</Label>
            </div>
            <TextInput
              id='email4'
              type='email'
              icon={HiMail}
              rightIcon={HiMail}
              className='!form-control'
              placeholder='name@niceadmin.com'
              required
            />
          </div>
          <div className='pb-3'>
            <div className='mb-2 block'>
              <Label htmlFor='username3'>Username</Label>
            </div>
            <TextInput
              id='username3'
              placeholder='Bonnie Green'
              addon='@'
              className='!form-control'
              required
            />
          </div>
        </div>
      </CardBox>
    </div>
  )
}

export default InputWithIcon
