import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartAreainteractive from './code/InteractiveCode'
import ChartAreainteractiveCode from './code/InteractiveCode.tsx?raw'

const ChartAreaInteractive = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Interactive</h4>
          <ChartAreainteractive />
        </div>
        <CodeDialog>{ChartAreainteractiveCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaInteractive
