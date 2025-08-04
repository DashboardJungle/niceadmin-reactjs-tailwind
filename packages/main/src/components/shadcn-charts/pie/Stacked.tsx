import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartPiestacked from './code/StackedCode'
import ChartPiestackedCode from './code/StackedCode.tsx?raw'

const ChartPieStacked = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Stacked</h4>
          <ChartPiestacked />
        </div>
        <CodeDialog>{ChartPiestackedCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartPieStacked
