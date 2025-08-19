import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import Defaultinput from './Codes/DefaultInputCode'
import DefaultinputCode from './Codes/DefaultInputCode.tsx?raw'

const DefaultInput = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Default Input</h4>
          <Defaultinput />
        </div>
        <CodeDialog>{DefaultinputCode}</CodeDialog>
      </CardBox>
    </div>
  )
}

export default DefaultInput
