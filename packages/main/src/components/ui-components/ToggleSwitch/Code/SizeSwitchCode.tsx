
import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react'

const SizeSwitchCode = () => {
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(true)

  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        <ToggleSwitch checked={switch1} onChange={setSwitch1} sizing='sm' />
        <ToggleSwitch checked={switch2} onChange={setSwitch2} sizing='md' />
        <ToggleSwitch checked={switch3} onChange={setSwitch3} sizing='lg' />
      </div>
    </>
  )
}

export default SizeSwitchCode
