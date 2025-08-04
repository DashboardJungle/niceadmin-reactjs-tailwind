

import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react'

const DefaultSwitchCode = () => {
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(false)
  const [switch3, setSwitch3] = useState(true)

  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        <ToggleSwitch checked={switch1} onChange={setSwitch1} />
        <ToggleSwitch checked={switch2} onChange={setSwitch2} />
        <ToggleSwitch checked={false} disabled onChange={() => undefined} />
        <ToggleSwitch checked={true} disabled onChange={() => undefined} />
        <ToggleSwitch checked={switch3} onChange={setSwitch3} />
      </div>
    </>
  )
}

export default DefaultSwitchCode
