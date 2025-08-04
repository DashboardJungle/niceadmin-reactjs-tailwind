import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadialstacked from './code/StackedCode'
import ChartRadialstackedCode from './code/StackedCode.tsx?raw'

const ChartRadialStacked = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Stacked</h4>
          <ChartRadialstacked />
        </div>
        <CodeDialog>{ChartRadialstackedCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadialStacked
