import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Defaultradio from './Code/DefaultRadioCode'
import DefaultradioCode from './Code/DefaultRadioCode.tsx?raw'

const DefaultRadio = () => {
  return (
    <>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>Default Radio</h4>
            <Defaultradio />
          </div>
          <CodeDialog>{DefaultradioCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  )
}

export default DefaultRadio
