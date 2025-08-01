import { Label, TextInput, Select, Datepicker, Button } from 'flowbite-react'

import TitleCard from '../../shared/TitleBorderCard'

const MulticolFormSeprator = () => {
  return (
    <div>
      <TitleCard title='Multi Column With Form Separator'>
        <div className='col-span-12 pb-6'>
          <h6 className='text-lg'>Account Details</h6>
        </div>

        <div className='grid lg:grid-cols-2 gap-6 pb-6'>
          <div>
            <div className='mb-2'>
              <Label htmlFor='username'>Username</Label>
            </div>
            <TextInput
              id='username'
              type='text'
              placeholder='John Deo'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div>
            <div className='mb-2'>
              <Label htmlFor='email'>Email</Label>
            </div>
            <TextInput
              id='email'
              type='email'
              placeholder='john.deo@example.com'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div>
            <div className='mb-2'>
              <Label htmlFor='password'>Password</Label>
            </div>
            <TextInput
              id='password'
              type='password'
              placeholder='********'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div>
            <div className='mb-2'>
              <Label htmlFor='confirmpassword'>Confirm Password</Label>
            </div>
            <TextInput
              id='confirmpassword'
              type='password'
              placeholder='********'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        <div className='col-span-12 pb-6 border-t border-border pt-5 dark:border-darkborder'>
          <h6 className='text-lg'>Personal Info</h6>
        </div>

        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='firstname'>First Name</Label>
            </div>
            <TextInput
              id='firstname'
              type='text'
              placeholder='Jordan'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='lastname'>Last Name</Label>
            </div>
            <TextInput
              id='lastname'
              type='text'
              placeholder='Powell'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='country'>Country</Label>
            </div>
            <Select id='country' required className='select-rounded'>
              <option>India</option>
              <option>Europe</option>
              <option>France</option>
            </Select>
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='language'>Language</Label>
            </div>
            <Select id='language' required className='select-rounded'>
              <option>English</option>
              <option>Spanish</option>
              <option>Chinese</option>
            </Select>
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='birthdate'>Birth Date</Label>
            </div>
            <Datepicker id='birthdate' className='form-control' />
          </div>

          <div className='lg:col-span-6 col-span-12'>
            <div className='mb-2'>
              <Label htmlFor='phone'>Phone No</Label>
            </div>
            <TextInput
              id='phone'
              type='tel'
              placeholder='124 456 741'
              sizing='md'
              className='!form-control'
            />
          </div>

          <div className='col-span-12 flex items-center gap-4 mt-4'>
            <Button type='submit' color='primary'>
              Submit
            </Button>
            <Button type='reset' color='error'>
              Cancel
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  )
}

export default MulticolFormSeprator
