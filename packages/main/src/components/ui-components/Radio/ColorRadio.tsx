import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Colorradio from './Code/ColorRadioCode'
import ColorradioCode from './Code/ColorRadioCode.tsx?raw'

const ColorRadio = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Color Radio</h4>
            <Colorradio />
          </div>
          <CodeDialog>{ColorradioCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default ColorRadio
