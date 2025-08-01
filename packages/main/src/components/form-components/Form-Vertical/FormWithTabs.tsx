
import {
  Tabs,
  Label,
  TextInput,
  Select,
  Datepicker,
  Button,
  TabItem,
} from 'flowbite-react'

import TitleCard from '../../shared/TitleBorderCard'

const FormWithTabs = () => {
  return (
    <div>
      <TitleCard title='Form with Tabs'>
        <Tabs aria-label='Full width tabs' className='gap-6'>
          {/* Personal Info */}
          <TabItem active title='Personal Info'>
            <div className='grid grid-cols-12 gap-10'>
              {/* Left column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {/* First Name */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='firstname' className='col-span-3'>
                    First Name
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='firstname'
                      type='text'
                      placeholder='John'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
                {/* Country */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='country' className='col-span-3'>
                    Country
                  </Label>
                  <div className='col-span-9'>
                    <Select id='country' required className='select-rounded'>
                      <option>India</option>
                      <option>Europe</option>
                      <option>France</option>
                    </Select>
                  </div>
                </div>
                {/* Birth Date */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='birthdate' className='col-span-3'>
                    Birth Date
                  </Label>
                  <div className='col-span-9'>
                    <Datepicker id='birthdate' className='!form-control' />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {/* Last Name */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='lastname' className='col-span-3'>
                    Last Name
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='lastname'
                      type='text'
                      placeholder='Doe'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
                {/* Language */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='language' className='col-span-3'>
                    Language
                  </Label>
                  <div className='col-span-9'>
                    <Select id='language' required className='select-rounded'>
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </Select>
                  </div>
                </div>
                {/* Phone */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='phone' className='col-span-3'>
                    Phone No
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='phone'
                      type='text'
                      placeholder='958 1475 458'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-5 mt-10'>
              <Button type='submit' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='error'>
                Cancel
              </Button>
            </div>
          </TabItem>

          {/* Account Details */}
          <TabItem title='Account Details'>
            <div className='grid grid-cols-12 gap-10'>
              {/* Left column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {/* Username */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='username' className='col-span-3'>
                    Username
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='username'
                      type='text'
                      placeholder='John.Doe'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
                {/* Password */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='password' className='col-span-3'>
                    Password
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='password'
                      type='password'
                      placeholder='********'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {/* Email */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='email' className='col-span-3'>
                    Email
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='email'
                      type='email'
                      placeholder='john.doe@example.com'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
                {/* Confirm Password */}
                <div className='grid grid-cols-12 gap-4 items-center'>
                  <Label htmlFor='confirm' className='col-span-3'>
                    Confirm
                  </Label>
                  <div className='col-span-9'>
                    <TextInput
                      id='confirm'
                      type='password'
                      placeholder='Re-enter password'
                      sizing='md'
                      className='!form-control'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-5 mt-10'>
              <Button type='submit' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='error'>
                Cancel
              </Button>
            </div>
          </TabItem>

          {/* Social Links */}
          <TabItem title='Social Links'>
            <div className='grid grid-cols-12 gap-10'>
              {/* Left column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {[
                  {
                    id: 'twitter',
                    label: 'Twitter',
                    placeholder: 'https://twitter.com/abc',
                  },
                  {
                    id: 'google',
                    label: 'Google',
                    placeholder: 'https://plus.google.com/abc',
                  },
                  {
                    id: 'instagram',
                    label: 'Instagram',
                    placeholder: 'https://instagram.com/abc',
                  },
                ].map(({ id, label, placeholder }) => (
                  <div
                    className='grid grid-cols-12 gap-4 items-center'
                    key={id}>
                    <Label htmlFor={id} className='col-span-3'>
                      {label}
                    </Label>
                    <div className='col-span-9'>
                      <TextInput
                        id={id}
                        type='text'
                        placeholder={placeholder}
                        sizing='md'
                        className='!form-control'
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className='lg:col-span-6 col-span-12 flex flex-col gap-10'>
                {[
                  {
                    id: 'facebook',
                    label: 'Facebook',
                    placeholder: 'https://facebook.com/abc',
                  },
                  {
                    id: 'linkedin',
                    label: 'LinkedIn',
                    placeholder: 'https://linkedin.com/abc',
                  },
                  {
                    id: 'quora',
                    label: 'Quora',
                    placeholder: 'https://quora.com/abc',
                  },
                ].map(({ id, label, placeholder }) => (
                  <div
                    className='grid grid-cols-12 gap-4 items-center'
                    key={id}>
                    <Label htmlFor={id} className='col-span-3'>
                      {label}
                    </Label>
                    <div className='col-span-9'>
                      <TextInput
                        id={id}
                        type='text'
                        placeholder={placeholder}
                        sizing='md'
                        className='!form-control'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center justify-center gap-5 mt-10'>
              <Button type='submit' color='primary'>
                Submit
              </Button>
              <Button type='reset' color='error'>
                Cancel
              </Button>
            </div>
          </TabItem>
        </Tabs>
      </TitleCard>
    </div>
  )
}

export default FormWithTabs
