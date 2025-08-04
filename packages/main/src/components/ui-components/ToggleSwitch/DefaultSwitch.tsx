import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Defaultswitch from './Code/DefaultSwitchCode'
import DefaultswitchCode from './Code/DefaultSwitchCode.tsx?raw'

const DefaultSwitch = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>
              Default Toggle Switch
            </h4>
            <Defaultswitch />
          </div>
          <CodeDialog>{DefaultswitchCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default DefaultSwitch
