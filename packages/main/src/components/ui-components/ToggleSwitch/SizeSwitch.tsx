import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Sizeswitch from './Code/SizeSwitchCode'
import SizeswitchCode from './Code/SizeSwitchCode.tsx?raw'

const SizeSwitch = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Toggle Switch Sizes</h4>
            <Sizeswitch />
          </div>
          <CodeDialog>{SizeswitchCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default SizeSwitch
