
import Squareinputs from './Codes/SquareInputs'
import SquareinputsCode from './Codes/SquareInputs.tsx?raw'
import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'

const SquareInputs = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Square Inputs form</h4>
          <Squareinputs />
        </div>
        <CodeDialog>{SquareinputsCode}</CodeDialog>
      </CardBox>
    </div>
  )
}

export default SquareInputs
