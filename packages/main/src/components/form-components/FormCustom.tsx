
import { useState } from 'react'

import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Progress,
  Radio,
  RangeSlider,
  Select,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react'

import { IconVolume, IconVolume2 } from '@tabler/icons-react'
import TitleCard from '../shared/TitleBorderCard'

const FormCustoms = () => {
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(true)
  return (
    <>
      <TitleCard title='Ordinary Form'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-4 col-span-12'>
            <Label htmlFor='name' className='mb-2 block'>
              Name
            </Label>
            <TextInput
              id='name'
              type='text'
              placeholder='Enter name'
              className='form-control'
              required
            />
          </div>
          <div className='lg:col-span-4 col-span-12'>
            <Label htmlFor='companyName' className='mb-2 block'>
              Company Name
            </Label>
            <TextInput
              id='companyName'
              type='text'
              placeholder='Enter company name'
              className='form-control'
              required
            />
          </div>
          <div className='lg:col-span-4 col-span-12'>
            <Label htmlFor='industryType' className='mb-2 block'>
              Industry Type
            </Label>
            <TextInput
              id='industryType'
              type='text'
              placeholder='Disabled input'
              className='form-control'
              disabled
              readOnly
            />
          </div>
          <div className='lg:col-span-6 col-span-12'>
            <Label htmlFor='dropdown' className='mb-2 block'>
              Select Dropdown
            </Label>
            <Select id='dropdown' required className='select-rounded'>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </Select>
          </div>
          <div className='lg:col-span-6 col-span-12'>
            <Label htmlFor='date' className='mb-2 block'>
              Date
            </Label>
            <Datepicker id='date' className='form-control' />
          </div>
        </div>

        {/* Radio Section */}
        <div className='grid grid-cols-12 gap-[1.875rem]'>
          <div className='col-span-12 mt-[1.875rem]'>
            <Label className='mb-2 block'>Select Gender</Label>
            <div className='grid grid-cols-12 items-center gap-[1.875rem]'>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Radio
                  id='genderMale'
                  name='gender'
                  value='Male'
                  defaultChecked
                />
                <Label htmlFor='genderMale'>Male</Label>
              </div>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Radio id='genderFemale' name='gender' value='Female' />
                <Label htmlFor='genderFemale'>Female</Label>
              </div>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Radio id='genderOther' name='gender' value='Other' disabled />
                <Label htmlFor='genderOther'>Disabled</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox Section */}
        <div className='grid grid-cols-12 gap-[1.875rem]'>
          <div className='col-span-12 mt-[1.875rem]'>
            <Label className='mb-2 block'>Industry Type</Label>
            <div className='grid grid-cols-12 items-center gap-[1.875rem]'>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Checkbox id='checkbox1' className='checkbox' />
                <Label htmlFor='checkbox1'>Retail</Label>
              </div>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Checkbox id='checkbox2' className='checkbox' />
                <Label htmlFor='checkbox2'>E-commerce</Label>
              </div>
              <div className='md:col-span-4 col-span-12 flex items-center gap-2'>
                <Checkbox id='checkbox3' className='checkbox' disabled />
                <Label htmlFor='checkbox3' disabled>
                  Disabled
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Section */}
        <div className='grid grid-cols-12 gap-[1.875rem]'>
          <div className='col-span-12 mt-[1.875rem]'>
            <Label className='mb-2 block'>Switches</Label>
            <div className='grid grid-cols-12 items-center gap-[1.875rem]'>
              <div className='lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2'>
                <ToggleSwitch
                  checked={switch1}
                  label='Enable Feature A'
                  onChange={setSwitch1}
                />
              </div>
              <div className='lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2'>
                <ToggleSwitch
                  checked={switch2}
                  label='Enable Feature B'
                  onChange={setSwitch2}
                />
              </div>
              <div className='lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2'>
                <ToggleSwitch
                  checked={false}
                  disabled
                  label='Disabled A'
                  onChange={() => undefined}
                />
              </div>
              <div className='lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2'>
                <ToggleSwitch
                  checked={true}
                  disabled
                  label='Disabled B'
                  onChange={() => undefined}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slider + Dropdown */}
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-4 col-span-12 mt-6'>
            <Label htmlFor='slider' className='mb-1 block'>
              Slider
            </Label>
            <RangeSlider id='slider' />
            <div className='flex items-center justify-between mt-3'>
              <Select
                id='rangeSelect1'
                required
                className='select-rounded select-option'>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Select>
              <Select
                id='rangeSelect2'
                required
                className='select-rounded select-option'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className='grid grid-cols-12 sm:gap-6 gap-6'>
          <div className='lg:col-span-4 col-span-12 mt-6'>
            <Progress progress={45} />
            <div className='flex items-center justify-between mt-3'>
              <IconVolume2 stroke={2} />
              <IconVolume stroke={2} />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='grid grid-cols-12 pt-[1.875rem] gap-6'>
          <div className='md:col-span-2 col-span-6'>
            <Button color='primary'>Add New</Button>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <Button color='secondary' disabled>
              Add New
            </Button>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <Button color='success'>Success</Button>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <Button color='info'>Info</Button>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <Button color='warning'>Warning</Button>
          </div>
          <div className='md:col-span-2 col-span-6'>
            <Button color='error'>Danger</Button>
          </div>
        </div>
      </TitleCard>
    </>
  )
}

export default FormCustoms
