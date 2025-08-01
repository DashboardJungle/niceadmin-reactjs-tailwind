import { Label, TextInput } from 'flowbite-react'

import CardBox from '../../shared/CardBox'

const InputSizing = () => {
  return (
    <div>
      <CardBox>
        <h4 className='text-lg font-semibold'>Input sizing</h4>
        <div className='flex max-w-md flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='small'>Small input</Label>
            </div>
            <TextInput
              id='small'
              type='text'
              sizing='sm'
              className='!form-control'
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='base'>Base input</Label>
            </div>
            <TextInput
              id='base'
              type='text'
              sizing='md'
              className='!form-control'
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='large'>Large input</Label>
            </div>
            <TextInput
              id='large'
              type='text'
              sizing='lg'
              className='!form-control'
            />
          </div>
        </div>
      </CardBox>
    </div>
  )
}

export default InputSizing
