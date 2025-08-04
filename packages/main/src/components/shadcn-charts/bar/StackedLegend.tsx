import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartBarstacked from './code/StackedLegendCode'
import ChartBarstackedCode from './code/StackedLegendCode.tsx?raw'

const ChartBarStacked = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Stacked + Legend</h4>
          <ChartBarstacked />
        </div>
        <CodeDialog>{ChartBarstackedCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartBarStacked
