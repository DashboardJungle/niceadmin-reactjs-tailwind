import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartAreastacked from './code/StackedCode'
import ChartAreastackedCode from './code/StackedCode.tsx?raw'

const ChartAreaStacked = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Stacked</h4>
          <ChartAreastacked />
        </div>
        <CodeDialog>{ChartAreastackedCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartAreaStacked
