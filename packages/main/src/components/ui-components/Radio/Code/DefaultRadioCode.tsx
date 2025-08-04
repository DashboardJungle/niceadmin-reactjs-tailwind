import { Label, Radio } from 'flowbite-react'

const DefaultRadioCode = () => {
  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        <div className='flex items-center gap-2'>
          <Radio
            id='united-state'
            name='countries'
            value='USA'
            defaultChecked
          />
          <Label htmlFor='united-state'>United States</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='germany' name='countries' value='Germany' />
          <Label htmlFor='germany'>Germany</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='spain' name='countries' value='Spain' />
          <Label htmlFor='spain'>Spain</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio id='uk' name='countries' value='United Kingdom' />
          <Label htmlFor='uk'>United Kingdom</Label>
        </div>
      </div>
    </>
  )
}

export default DefaultRadioCode
