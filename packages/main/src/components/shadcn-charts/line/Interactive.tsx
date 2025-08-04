import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartLineinteractive from './code/InteractiveCode'
import ChartLineinteractiveCode from './code/InteractiveCode.tsx?raw'

const ChartLineInteractive = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Interactive</h4>
          <ChartLineinteractive />
        </div>
        <CodeDialog>{ChartLineinteractiveCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartLineInteractive
