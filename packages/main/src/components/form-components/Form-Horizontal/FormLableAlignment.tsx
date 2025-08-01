import { Label, TextInput, Select, Datepicker, Button } from 'flowbite-react'

import TitleCard from '../../shared/TitleBorderCard'

const FormLableAlignment = () => {
  return (
    <div>
      <TitleCard title='Form Label Alignment'>
        {/* Account Details Header */}
        <div className='grid grid-cols-12 items-center pb-6'>
          <div className='col-span-3'>
            <h6 className='text-lg'>Account Details</h6>
          </div>
          <div className='col-span-9'></div>
        </div>

        {/* Username */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='username'>Username</Label>
          </div>
          <div className='basis-3/4'>
            <TextInput
              id='username'
              type='text'
              placeholder='John Deo'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        {/* Email */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='email'>Email</Label>
          </div>
          <div className='basis-3/4'>
            <TextInput
              id='email'
              type='text'
              placeholder='john.deo@example.com'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        {/* Password */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='password'>Password</Label>
          </div>
          <div className='basis-3/4'>
            <TextInput
              id='password'
              type='password'
              placeholder='john.deo'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        {/* Personal Info Header */}
        <div className='grid grid-cols-12 items-center pb-6 border-t border-border pt-5 dark:border-darkborder'>
          <div className='col-span-3'>
            <h6 className='text-lg'>Personal Info</h6>
          </div>
          <div className='col-span-9'></div>
        </div>

        {/* Full Name */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='fullname'>Full Name</Label>
          </div>
          <div className='basis-3/4'>
            <TextInput
              id='fullname'
              type='text'
              placeholder='John Deo'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        {/* Country */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='country'>Country</Label>
          </div>
          <div className='basis-3/4'>
            <Select id='country' required className='select-md'>
              <option>India</option>
              <option>Europe</option>
              <option>France</option>
            </Select>
          </div>
        </div>

        {/* Birth Date */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='birthdate'>Birth Date</Label>
          </div>
          <div className='basis-3/4'>
            <Datepicker id='birthdate' className='!form-control' />
          </div>
        </div>

        {/* Phone Number */}
        <div className='flex pb-6'>
          <div className='basis-1/4 flex items-center pr-[1.875rem] justify-end'>
            <Label htmlFor='phone'>Phone No</Label>
          </div>
          <div className='basis-3/4'>
            <TextInput
              id='phone'
              type='text'
              placeholder='512 2250 551'
              sizing='md'
              className='!form-control'
            />
          </div>
        </div>

        {/* Form Buttons */}
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-3'></div>
          <div className='col-span-9 flex items-center gap-[1rem]'>
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

export default FormLableAlignment
