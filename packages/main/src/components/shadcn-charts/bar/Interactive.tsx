import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBarinteractive from './code/InteractiveCode'
import ChartBarinteractiveCode from './code/InteractiveCode.tsx?raw'

const ChartBarInteractive = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Interactive</h4>
          <ChartBarinteractive />
        </div>
        <CodeDialog>{ChartBarinteractiveCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarInteractive
