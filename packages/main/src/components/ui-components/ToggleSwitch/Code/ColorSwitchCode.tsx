

import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react'

const ColorSwitchCode = () => {
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(true)
  const [switch4, setSwitch4] = useState(true)
  const [switch5, setSwitch5] = useState(true)

  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        <ToggleSwitch checked={switch1} onChange={setSwitch1} />
        <ToggleSwitch checked={switch2} onChange={setSwitch2} color='blue' />
        <ToggleSwitch checked={switch3} onChange={setSwitch3} color='success' />
        <ToggleSwitch checked={switch4} onChange={setSwitch4} color='red' />
        <ToggleSwitch checked={switch5} onChange={setSwitch5} color='yellow' />
      </div>
    </>
  )
}

export default ColorSwitchCode
