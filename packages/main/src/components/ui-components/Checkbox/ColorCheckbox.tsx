import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Colorcheckbox from './Code/ColorCheckboxCode'
import ColorcheckboxCode from './Code/ColorCheckboxCode.tsx?raw'

const ColorCheckbox = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Color Checkbox</h4>
            <Colorcheckbox />
          </div>
          <CodeDialog>{ColorcheckboxCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default ColorCheckbox
