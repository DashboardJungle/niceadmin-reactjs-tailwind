import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import ChartRadarGridfill from './code/GridFilledCode'
import ChartRadarGridfillCode from './code/GridFilledCode.tsx?raw'

const ChartRadarGridFill = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>Grid Filled</h4>
          <ChartRadarGridfill />
        </div>
        <CodeDialog>{ChartRadarGridfillCode}</CodeDialog>
      </div>
    </CardBox>
  )
}

export default ChartRadarGridFill
