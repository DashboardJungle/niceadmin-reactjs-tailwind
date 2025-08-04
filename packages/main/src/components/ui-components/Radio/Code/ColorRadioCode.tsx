import { Label, Radio } from 'flowbite-react'

const ColorRadioCode = () => {
  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        <div className='flex items-center gap-2'>
          <Radio id='red' name='color' color='red' defaultChecked />
          <Label htmlFor='red'>Red</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='info' name='color' color='info' />
          <Label htmlFor='info'>Info</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='success' name='color' color='success' />
          <Label htmlFor='success'>Success</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='warning' name='color' color='warning' />
          <Label htmlFor='warning'>Warning</Label>
        </div>
      </div>
    </>
  )
}

export default ColorRadioCode
