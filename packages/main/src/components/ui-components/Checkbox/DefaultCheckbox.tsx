import CardBox from '../../shared/CardBox'
import Defaultcheckbox from './Code/DefaultCheckboxCode'
import DefaultcheckboxCode from './Code/DefaultCheckboxCode.tsx?raw'
import CodeDialog from '../../shared/CodeDialog'

const DefaultCheckbox = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Default Checkbox</h4>
            <Defaultcheckbox />
          </div>
          <CodeDialog>{DefaultcheckboxCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default DefaultCheckbox
