import { Checkbox } from 'flowbite-react'

const DefaultCheckboxCode = () => {
  return (
    <>
      <div className='flex gap-4 flex-wrap mt-2'>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
    </>
  )
}

export default DefaultCheckboxCode
