import { Checkbox } from 'flowbite-react'

const ColorCheckboxCode = () => {
  return (
    <>
      <div className='flex gap-4 flex-wrap mt-2'>
        <Checkbox defaultChecked />
        <Checkbox color='blue' defaultChecked />
        <Checkbox color='green' defaultChecked />
        <Checkbox color='warning' defaultChecked />
        <Checkbox color='red' defaultChecked />
      </div>
    </>
  )
}

export default ColorCheckboxCode
