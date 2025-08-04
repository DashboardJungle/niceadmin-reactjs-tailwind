import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Colorswitch from './Code/ColorSwitchCode'
import ColorswitchCode from './Code/ColorSwitchCode.tsx?raw'

const ColorSwitch = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Color Toggle Switch</h4>
            <Colorswitch />
          </div>
          <CodeDialog>{ColorswitchCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default ColorSwitch
